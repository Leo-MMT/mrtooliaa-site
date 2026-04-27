#!/usr/bin/env node
/**
 * verify-csp-hashes.mjs
 * Verifies that all JSON-LD script hashes in `public/_headers` match the
 * actual content in the built HTML files under `dist/`.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { createHash } from 'crypto';

const DIST = resolve('dist');
const HEADERS = resolve('public/_headers');

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...findHtmlFiles(full));
    else if (entry.endsWith('.html')) results.push(full);
  }
  return results;
}

function extractJsonLdHashes(html) {
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  const hashes = [];
  let match;
  while ((match = re.exec(html)) !== null) {
    const content = match[1];
    const hash = createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.push(`'sha256-${hash}'`);
  }
  return hashes;
}

// Main
const headersContent = readFileSync(HEADERS, 'utf8');
const cspLine = headersContent.split('\n').find(l => l.trim().startsWith('Content-Security-Policy'));
if (!cspLine) { console.error('❌ No CSP header found in _headers'); process.exit(1); }

const htmlFiles = findHtmlFiles(DIST);
let allOk = true;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const hashes = extractJsonLdHashes(html);
  const relPath = file.replace(DIST + '/', '');

  for (const hash of hashes) {
    if (cspLine.includes(hash)) {
      console.log(`✅ ${relPath}: hash ${hash.slice(0, 20)}… found in CSP`);
    } else {
      console.error(`❌ ${relPath}: hash ${hash} NOT in CSP header!`);
      allOk = false;
    }
  }
}

if (!allOk) {
  console.error('\n❌ CSP hash mismatch detected! Update _headers with the correct hashes.');
  console.error('   Run: python3 -c "import re,hashlib,base64,pathlib; ...');
  process.exit(1);
} else {
  console.log('\n✅ All JSON-LD hashes match the CSP header.');
}

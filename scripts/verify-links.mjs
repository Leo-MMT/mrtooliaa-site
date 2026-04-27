#!/usr/bin/env node
/**
 * verify-links.mjs
 * Verifies WhatsApp links, security attributes, and image references in built HTML.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const DIST = resolve('dist');
const PHONE = '18099567956';

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...findHtmlFiles(full));
    else if (entry.endsWith('.html')) results.push(full);
  }
  return results;
}

const htmlFiles = findHtmlFiles(DIST);
let errors = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const relPath = file.replace(DIST + '/', '');

  // Check WhatsApp links use correct phone
  const waLinks = html.match(/wa\.me\/\d+/g) || [];
  for (const link of waLinks) {
    if (!link.includes(PHONE)) {
      console.error(`❌ ${relPath}: Wrong phone in WhatsApp link: ${link}`);
      errors++;
    }
  }

  // Check target="_blank" has rel="noopener noreferrer" or rel="noopener"
  const blankTargets = html.match(/target="_blank"[^>]*/g) || [];
  for (const tag of blankTargets) {
    if (!tag.includes('rel="noopener')) {
      console.error(`❌ ${relPath}: target="_blank" without rel="noopener": ...${tag.slice(0, 60)}...`);
      errors++;
    }
  }

  // Check image src references exist
  const imgSrcs = html.match(/src="\/assets\/[^"]+"/g) || [];
  for (const src of imgSrcs) {
    const path = src.replace('src="', '').replace('"', '');
    const fullPath = join(DIST, path);
    if (!existsSync(fullPath)) {
      console.error(`❌ ${relPath}: Image not found: ${path}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`\n❌ ${errors} issue(s) found.`);
  process.exit(1);
} else {
  console.log('✅ All links, security attributes, and images verified.');
}

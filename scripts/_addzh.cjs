// Enable zh topic generation: add 'zh' to TOPIC_LOCALES and a zh slug per topic.
const fs = require('fs');
const p = 'src/lib/topics.ts';
let s = fs.readFileSync(p, 'utf8');

// 1) TOPIC_LOCALES
s = s.replace(
  "export const TOPIC_LOCALES = ['sr', 'en'] as const;",
  "export const TOPIC_LOCALES = ['sr', 'en', 'zh'] as const;"
);

// 2) For each slugs block, reuse the en slug as the zh slug.
const re = /(en:\s*'([^']+)',[\s\S]*?sr:\s*'[^']+')(\s*,\s*\n\s*\},)/g;
let count = 0;
s = s.replace(re, (m, g1, enSlug, g3) => {
  count++;
  return `${g1},\n      zh: '${enSlug}'${g3}`;
});

fs.writeFileSync(p, s, 'utf8');
console.log('zh slugs added:', count);
console.log('TOPIC_LOCALES line present:', s.includes("TOPIC_LOCALES = ['sr', 'en', 'zh']"));

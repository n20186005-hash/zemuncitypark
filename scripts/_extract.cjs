// Extract specific topic keys from en.json's topics namespace into scripts/_batch.json
const fs = require('fs');
const keys = process.argv.slice(2);
const en = JSON.parse(fs.readFileSync('src/messages/en.json', 'utf8')).topics;
const out = {};
for (const k of keys) {
  if (!en[k]) { console.error('MISSING en topic:', k); process.exit(1); }
  out[k] = en[k];
}
fs.writeFileSync('scripts/_batch.json', JSON.stringify(out, null, 2), 'utf8');
console.log('extracted', keys.length, 'topics:', keys.join(', '));

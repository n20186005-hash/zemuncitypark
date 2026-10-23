// Merge a batch JSON of topic translations into scripts/_zh_topics.json (accumulates).
const fs = require('fs');
const batchFile = process.argv[2];
if (!batchFile) { console.error('usage: node _merge.cjs <batch.json>'); process.exit(1); }
const batch = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
const outFile = 'scripts/_zh_topics.json';
let acc = {};
if (fs.existsSync(outFile)) acc = JSON.parse(fs.readFileSync(outFile, 'utf8'));
const keys = Object.keys(batch);
for (const k of keys) acc[k] = batch[k];
fs.writeFileSync(outFile, JSON.stringify(acc, null, 2), 'utf8');
console.log('merged', keys.length, 'topics; total now', Object.keys(acc).length, '->', keys.join(', '));

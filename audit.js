const fs = require('fs');
const html = fs.readFileSync('C:/Users/mathe/.gemini/antigravity/scratch/armindo-ramalho/original.html', 'utf8');

const hrefRegex = /href=["']([^"']+)["']/g;
const hrefs = new Set();
let match;
while ((match = hrefRegex.exec(html)) !== null) {
  hrefs.add(match[1]);
}
console.log('Unique hrefs:', Array.from(hrefs));

const filterRegex = /data-filter=["']([^"']+)["']/g;
const filters = [];
while ((match = filterRegex.exec(html)) !== null) {
  filters.push(match[1]);
}
console.log('Filters:', filters);

const idRegex = /id=["']([^"']+)["']/g;
const ids = new Set();
while ((match = idRegex.exec(html)) !== null) {
  ids.add(match[1]);
}
console.log('IDs:', Array.from(ids));

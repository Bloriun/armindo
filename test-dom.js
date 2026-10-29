const fs = require('fs');
const html = fs.readFileSync('C:/Users/mathe/.gemini/antigravity/scratch/armindo-ramalho/index.html', 'utf8');

const regex = /<button[^>]*data-filter="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Button:', m[1], 'Text:', m[2].trim());
}

const itemRegex = /class="catalog-item[^"]*"[^>]*data-category="([^"]+)"/g;
while ((m = itemRegex.exec(html)) !== null) {
  console.log('Item category:', m[1]);
}

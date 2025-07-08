const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '/src/images/befores');
const outputFile = path.join(__dirname, '/gallery-befores.html');

const files = fs.readdirSync(galleryDir).filter(file =>
  /\.(jpe?g|png|gif|webp)$/i.test(file)
);

const html = files.map(file => `
  <div class="gallery-item">
    <img src="/src/images/befores/${file}" alt="${file}" />
  </div>
`).join('\n');

fs.writeFileSync(outputFile, html);
console.log(`✅ Generated gallery.html with ${files.length} images.`);

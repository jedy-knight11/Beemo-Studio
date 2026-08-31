const fs = require('fs');

let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
content = content.replace(
  /<input \s*type="text" \s*placeholder="¿PRESUPUESTO ESTIMADO\? \(OPCIONAL\)"/g,
  '<input type="number" placeholder="¿PRESUPUESTO ESTIMADO? (OPCIONAL)"'
);
fs.writeFileSync('src/pages/Contact.tsx', content, 'utf8');
console.log('Contact.tsx updated to use type="number".');

const fs = require('fs');

const file = 'src/components/ClientTrust.tsx';
let content = fs.readFileSync(file, 'utf8');

// The array has string literals like '/logos/duragas.webp'
// We replace them with import.meta.env.BASE_URL + 'logos/duragas.webp'
content = content.replace(/'\/logos\/([^']+)'/g, "(import.meta as any).env.BASE_URL + 'logos/$1'");

fs.writeFileSync(file, content);
console.log('Fixed ClientTrust');

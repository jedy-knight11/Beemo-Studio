const fs = require('fs');

function updateFile(filePath, isPage) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove Portafolio Destacado heading
  content = content.replace(/<h2[^>]*>[\s\n]*Portafolio Destacado[\s\n]*<\/h2>/i, '');
  
  // Replace categories array
  content = content.replace(
    /const categories = \['Todos', 'Comerciales', 'Institucionales', 'Coberturas'\];/,
    "const categories = ['Todos', 'Comerciales', 'Redes', 'Post Producción', 'Coberturas', 'Video Casos'];"
  );
  
  // Update categories of specific items based on name/client
  // We'll just do a global replace for the categories string inside the array items
  // Since we know the order or can match by title.
  
  // Orocash -> Comerciales (Keep)
  
  // Mazda -> Redes
  content = content.replace(/(name:\s*'Mazda CX90',[^}]*?category:\s*)'Comerciales'/g, "$1'Redes'");
  content = content.replace(/(client:\s*"MAZDA",[^}]*?category:\s*)"Comerciales"/g, "$1\"Redes\"");
  
  // PedidosYa -> Redes
  content = content.replace(/(name:\s*'PedidosYa',[^}]*?category:\s*)'Comerciales'/g, "$1'Redes'");
  content = content.replace(/(client:\s*"PEDIDOSYA",[^}]*?category:\s*)"Comerciales"/g, "$1\"Redes\"");

  // PeiGo -> Post Producción
  content = content.replace(/(name:\s*'PeiGo Madre',[^}]*?category:\s*)'Comerciales'/g, "$1'Post Producción'");
  content = content.replace(/(client:\s*"PEIGO",[^}]*?category:\s*)"Comerciales"/g, "$1\"Post Producción\"");
  
  // Duragas Oficina -> Video Casos
  content = content.replace(/(name:\s*'Duragas Express Oficina',[^}]*?category:\s*)'Institucionales'/g, "$1'Video Casos'");
  content = content.replace(/(client:\s*"DURAGAS",[^}]*?category:\s*)"Institucionales"/g, "$1\"Video Casos\"");
  
  // Blinseg -> Redes
  content = content.replace(/(name:\s*'Blinseg',[^}]*?category:\s*)'Institucionales'/g, "$1'Redes'");
  content = content.replace(/(client:\s*"BLINSEG",[^}]*?category:\s*)"Institucionales"/g, "$1\"Redes\"");
  
  // Sambolon -> Redes
  content = content.replace(/(name:\s*'SambolA3n Event',[^}]*?category:\s*)'Coberturas'/g, "$1'Redes'");
  content = content.replace(/(client:\s*"SAMBOLON",[^}]*?category:\s*)"Coberturas"/g, "$1\"Redes\"");

  fs.writeFileSync(filePath, content);
}

updateFile('src/components/Portfolio.tsx', false);
updateFile('src/pages/Portfolio.tsx', true);

console.log('Portfolio files updated.');

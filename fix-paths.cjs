const fs = require('fs');

const filesToFix = [
  'src/components/Portfolio.tsx',
  'src/components/Services.tsx',
  'src/components/Team.tsx',
  'src/pages/Portfolio.tsx',
  'src/pages/ServicesPage.tsx',
  'src/components/Hero.tsx',
  'src/components/Footer.tsx',
  'src/components/Loader.tsx',
  'src/components/Navbar.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix string literal definitions
    content = content.replace(/video:\s*['"](\/[^'"]+)['"]/g, "video: import.meta.env.BASE_URL + '$1'.substring(1)");
    content = content.replace(/image:\s*['"](\/[^'"]+)['"]/g, "image: import.meta.env.BASE_URL + '$1'.substring(1)");
    
    // Fix Hero video
    content = content.replace(/const videoSrc = ['"]\/([^'"]+)['"]/, "const videoSrc = import.meta.env.BASE_URL + '$1'");
    
    // Fix raw JSX src
    content = content.replace(/src=['"](\/[^'"]+)['"]/g, "src={import.meta.env.BASE_URL + '$1'.substring(1)}");
    
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});

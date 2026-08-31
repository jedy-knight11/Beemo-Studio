const fs = require('fs');
const file = 'src/components/Process.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the h2 classes in the desktop layout
content = content.replace(
  /className="text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-\[0\.9\] break-words"/g,
  'className="text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9]"'
);

fs.writeFileSync(file, content);
console.log('Fixed h2 responsive sizing and removed break-words.');

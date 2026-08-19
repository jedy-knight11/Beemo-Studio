const fs = require('fs');
const html = fs.readFileSync('beemo.html', 'utf8');
const urls = html.match(/https:\/\/[^"'\s]+\.(?:png|jpg|jpeg|svg|webp|gif)/gi) || [];
const uniqueUrls = Array.from(new Set(urls));
console.log(uniqueUrls.join('\n'));

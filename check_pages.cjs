const https = require('https');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
  }
};

function checkPage(url) {
  https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('--- ' + url + ' ---');
      const matches = data.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi) || [];
      console.log('Headings:', matches.map(m => m.replace(/<[^>]+>/g, '').trim()).filter(x=>x).join(' | '));
      const imgs = data.match(/https:\/\/images\.squarespace-cdn\.com[^"'\s]+?(?:jpg|png|webp)/gi) || [];
      console.log('Images:', new Set(imgs).size);
      
      const vids = data.match(/https:\/\/(www\.)?(youtube\.com|vimeo\.com)[^"'\s]+/gi) || [];
      console.log('Videos:', new Set(vids).size);
    });
  });
}

checkPage('https://www.beemostudio.com/comerciales-spots');
checkPage('https://www.beemostudio.com/coberturas');
checkPage('https://www.beemostudio.com/videocasos');

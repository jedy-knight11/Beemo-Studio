const fs = require('fs');
const path = require('path');
const https = require('https');

const logos = [
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/02611d25-926c-4a8c-ba99-2ac005ccd25f/Duragas_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png", name: "duragas.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/42c9f358-13dd-4753-b4cd-c999ec36f99a/Renault+Final_Mesa+de+trabajo+1+copia.png", name: "renault_1.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/0a059cb7-086c-4d9b-ba4e-20bd9e7ef186/Renault+Final_Mesa+de+trabajo+1+copia+2.png", name: "renault_2.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/f37e2fd9-170c-491f-b5ac-57d6cc0b3e41/ya_Mesa+de+trabajo+1+copia+6.png", name: "ya.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/f8c5bc7d-f7bf-44b9-ac24-7fe5a607ae41/UCG_Mesa+de+trabajo+1+copia+3.png", name: "ucg.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/01be759e-8392-4314-92db-2ffa44f662e8/ayn_Mesa+de+trabajo+1+copia+5.png", name: "ayn.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/8569f4a8-20f7-496f-b326-ec6b9ad140ed/toyocosta_Mesa+de+trabajo+1+copia+7.png", name: "toyocosta.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/c01c454d-7a9d-49fd-aa8c-20f40dbd9fe9/ciudad_Mesa+de+trabajo+1+copia+8.png", name: "ciudad.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6282c1bc8ca8be1661f2d020/67efdb0a-b2f1-4abb-a1eb-09ce54561dfa/medec+institu.jpg", name: "medec.jpg" }
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

logos.forEach(logo => {
  const dest = path.join(dir, logo.name);
  const file = fs.createWriteStream(dest);
  https.get(logo.url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Downloaded: ' + logo.name);
    });
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    console.error('Error downloading ' + logo.name + ': ' + err.message);
  });
});

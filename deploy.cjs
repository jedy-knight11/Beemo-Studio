const { spawn } = require('child_process');

const child = spawn('npx', ['surge', './dist', 'beemo-studio-preview-1.surge.sh'], { shell: true });

child.stdout.on('data', data => {
  const out = data.toString();
  process.stdout.write(out);
  
  if (out.toLowerCase().includes('email:')) {
    child.stdin.write('jedy.beemo.studio@gmail.com\n');
  }
  if (out.toLowerCase().includes('password:')) {
    child.stdin.write('jedy123456\n');
  }
});

child.stderr.on('data', data => {
  process.stderr.write(data.toString());
});

child.on('close', code => {
  console.log(`Surge exited with code ${code}`);
});

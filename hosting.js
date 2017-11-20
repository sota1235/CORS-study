const http = require('http');
const pug = require('pug');
const path = require('path');
const fs = require('fs');

const PORT = 9000;
const ASSETS_PATH = path.join(__dirname, 'assets');

const server = http.createServer((req, res) => {
  const lookup = decodeURI(req.url);

  if (lookup === '/assets/index.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });

    fs.readFile(path.join(ASSETS_PATH, 'index.js'), 'utf8', (err, text) => {
      if (err) {
        res.end('error');
      }
      res.end(text);
    });
    return;
  }

  const html = pug.renderFile(path.join(__dirname, 'template', 'index.pug'));
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

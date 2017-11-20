const http = require('http');
const pug = require('pug');
const path = require('path');

const PORT = 9000;

const server = http.createServer((req, res) => {
  const html = pug.renderFile(path.join(__dirname, 'template', 'index.pug'));
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

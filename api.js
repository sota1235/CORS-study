const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end('hoge');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const http = require('http');

const PORT = 9000;

const server = http.createServer((req, res) => {
  res.end();
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

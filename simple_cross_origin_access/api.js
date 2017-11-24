const http = require('http');

const PORT = 8000;

const makeResForCORS = (response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
};

const server = http.createServer((req, res) => {
  makeResForCORS(res);
  res.end('hello');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

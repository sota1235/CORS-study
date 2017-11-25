const http = require('http');

const PORT = 8000;
const TARGET_ORIGIN = 'http://localhost:9000';

const makeResForCORS = (response) => {
  response.setHeader('Access-Control-Allow-Origin', TARGET_ORIGIN);
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  response.setHeader('Access-Control-Expose-Headers', 'X-Custom-Header,X-Node-Festival');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
};

const server = http.createServer((req, res) => {
  makeResForCORS(res);

  if (req.headers.origin !== TARGET_ORIGIN) {
    res.end('invalid request');
    return;
  }
  res.end('hello');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

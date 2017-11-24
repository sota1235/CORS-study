const http = require('http');

const PORT = 8000;

const makeResForCORS = (response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.setHeader('Access-Control-Expose-Headers', 'X-Custom-Header,X-Node-Festival');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
};

const makeResForPreflight = (response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'X-Custom-Header,X-Node-Festival');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Max-Age', 8640000);
};

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    makeResForPreflight(res);
    res.end('preflight');
    return;
  }

  makeResForCORS(res);

  res.end('hello');
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

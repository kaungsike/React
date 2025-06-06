// server.js
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname workaround in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'components', req.url === '/' ? 'Hello.jsx' : req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

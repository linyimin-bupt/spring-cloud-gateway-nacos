const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // 等待20ms
    // await new Promise(resolve => setTimeout(resolve, 20))
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
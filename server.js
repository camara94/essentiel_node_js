const http = require('http');
const url = require('url');

let handleRequest = (req, res) => {
    const URL = url.parse(req.url).pathname;
    console.log(URL);
    if(URL === '/') {
        res.writeHead(200,'', {'Content-Type': 'text/html'});
        res.write('Bonjour tout le monde !!!');
    }
}

const server = http.createServer(handleRequest);

server.listen(8080);


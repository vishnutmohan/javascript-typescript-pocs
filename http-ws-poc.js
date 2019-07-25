const ws = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end(`Server working properly. Requested url is ${req.url}`);
});
const wsServer = new ws.Server({
    server
});

wsServer.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(message);
    });
});

server.listen(8080, () => {
    console.log("server started");
})
const ws = require('ws');

let wsServer = new ws.Server({
    port: 3000
});

wsServer.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(message);
        socket.send(message)
    });
});
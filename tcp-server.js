const net = require('net');

const serverStart = () => {
    const server = net.createServer(socketHandler);
}

const socketHandler = (socket) => {

}
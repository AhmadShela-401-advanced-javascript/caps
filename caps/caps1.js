/* eslint-disable no-undef */
'use strict';

const net = require('net');

const server = net.createServer();

// // const PORT = process.env.PORT || 4000;

const port = process.env.PORT || 4000;

server.listen(port, ()=> console.log(`server is running on ${port}`));

// defined the connetionPool that contains all the connection's sockets
var connectionPool = {};

server.on('connection',(socket)=>{

const id = `Socket-${Math.random()}`;

connectionPool[id] = socket;

socket.on('data',payload=>{
    let msg = JSON.parse(payload.toString())
    bordCastMsg(msg);
});
function bordCastMsg(msg) {
    let payload = JSON.stringify(msg);
    for (let id in connectionPool) {
        connectionPool[id].write(payload);
    }
}
socket.on('close',()=>{

})

});

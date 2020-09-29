/* eslint-disable no-undef */
'use strict';

const io = require('socket.io')(3000);
// Load all apps modules
// require('./apps/slick.js')(io);
const caps = io.of('/caps');

caps.on('connection',(socket)=>{
    console.log('wellcome to the caps server',socket.id);
    let currentRoom = '';
    socket.on('join',(room) =>{
        socket.leave(currentRoom);
        socket.join(room);
        currentRoom = room;
        console.log({currentRoom});

    });
    // pickup, in-transit, delivered
    
    socket.on('pickup',payload =>{
        // console.log('pickup payload is :',payload);
        caps.emit('pickup',payload)
        broadCast('pickup',payload);
    });
    socket.on('in-transit',payload =>{
        // console.log('in-transit payload is :',payload);
        caps.emit('in-transit',payload)
        broadCast('in-transit',payload);
    });
    socket.on('delivered',payload =>{
        // console.log('delivered payload is :',payload);
        caps.emit('delivered',payload)
        broadCast('delivered',payload);
    });
    function broadCast(event,payload) {
        console.log({event ,payload});
    }
    // socket.on('data',payload =>{
    //     console.log('this is the payload ',payload);
    //     let msg = JSON.stringify(payload);
    //     socket.write(msg)
    // });

});

// io.on('connection', (socket)=> {
//     console.log("Welcome to My Global Connection!")
// });
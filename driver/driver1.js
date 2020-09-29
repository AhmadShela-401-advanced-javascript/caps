/* eslint-disable no-undef */
'use strict';

const net = require('net');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const client = new net.Socket();

client.connect(port,host,()=>{
    console.log('connecting..');
});

client.on('data',payload =>{
    let msg = JSON.parse(payload.toString());
    // console.log('payload >>>>>>>>> : ',msg);
    if(msg.event == 'pickup'){
        setTimeout(()=>{
            // myEvent.emit('in-transit',payload)
            let event = JSON.stringify({event: `in-transit`,payload : msg.payload });
            console.log(`Driver Pickup ${msg.payload.orderId}`)
            client.write(event)
        },1000);
        setTimeout(()=>{
            let event = JSON.stringify({event: `delivered`,payload : msg.payload });
            client.write(event)
        },3000);
    }
});
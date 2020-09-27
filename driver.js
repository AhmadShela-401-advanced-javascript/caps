'use strict';
const myEvent =  require('./events')
/**
 * pickup event listener return the order jurney info pickup => ineTransit => delevered
 * Provided by seTimeOutFunction to simulate what it would looks like in real CAPS
 */
myEvent.on('pickup',pickup);

function pickup() {
    setTimeout(()=>{
        console.log(`Driver Pickup ${payload.orderId}`)
        myEvent.emit('in-transit',payload)
    },1000);
    setTimeout(()=>{
        console.log(`DRIVER: delivered up ${payload.orderId}`);
        myEvent.emit('delivered',payload)
    },3000);
}
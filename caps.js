'use strict';
const myEvent =  require('./events');

myEvent.on('pickup',pickup);
require('./driver');
require('./vendor');
myEvent.on('in-transit',inTransit);
myEvent.on('delivered',delivered);

/**
 * pickup event listener return the order info
 */
function pickup(payload) {
    console.log(`EVENT { event: 'pickup',
    time: ${new Date().toISOString()},
    payload: { store: ${payload.storeName},
    orderID: ${payload.orderId},
    customer: ${payload.customerName},
    address: ${payload.address} }
}`);
}
/**
 * in-transit event listener return the order info
 */
function inTransit(payload) {
    console.log(`EVENT { event: 'in-transit',
    time: ${new Date().toISOString()},
    payload:
    { store: ${payload.storeName},
    orderID: ${payload.orderId},
    customer: ${payload.customerName},
    address: ${payload.address} } }`);
}
/**
 * delivered event listener return the order info
 */
function delivered(payload) {
    console.log(`EVENT { event: 'delivered',
    time: ${new Date().toISOString()},
    payload:
    { store: ${payload.storeName},
    orderID: ${payload.orderId},
    customer: ${payload.customerName},
    address: ${payload.address} } }`);
}
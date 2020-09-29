/* eslint-disable no-undef */
'use strict';

const net = require('net');
const faker = require('faker');
require('dotenv').config();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const storName = process.env.STORE_NAME;

const client = new net.Socket();

client.connect(port,host,()=>{
    console.log('connecting..');
});

client.on('data',payload=>{
    let msg = JSON.parse(payload.toString());
    // console.log('**********',msg);
    if(msg.event == 'delivered'){
        console.log(`thank you for delivering the package ${msg.payload.orderId}`);
    }
})


function createOrder() {
    let newOrder = {
        storeName: storName,
        orderId: faker.random.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    console.log('*******************New Order*************************');
    setTimeout(createOrder, 5000);
    let event = JSON.stringify({event: `pickup`,payload : newOrder });
    client.write(event);
}
setTimeout(createOrder, 5000);
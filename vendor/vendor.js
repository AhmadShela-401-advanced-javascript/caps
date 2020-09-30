/* eslint-disable no-undef */
'use strict';

const io = require('socket.io-client');
const faker = require('faker');

const storeId = 'Ahmad';

const vendor = io.connect('http://localhost:3000/caps');

// vendor.on('connect',()=>{

    vendor.emit('join', storeId);

    // slick.on('joined', (joinChannel)=> {
    //     console.log("on Joined!!! joinChannel:  ",joinChannel)
    //     storeId = joinChannel;
    // });
    // vendor.emit('pickup','hello this is just a test')

    vendor.on('delivered',payload =>{
        console.log('Thank you ',payload.orderId);
    });

// });

function createOrder() {
    let newOrder = {
        storeName: storeId,
        orderId: faker.random.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    console.log('*******************New Order*************************');
    setTimeout(createOrder, 5000);
    // let event = JSON.stringify({event: `pickup`,payload : newOrder });
    // client.write(event);
    vendor.emit('pickup',newOrder)
}
setTimeout(createOrder, 5000);
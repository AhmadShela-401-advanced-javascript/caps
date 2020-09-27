'use strict';
/**
 * faler is a Nodejs library that used to provice phony data
 */
const faker = require('faker');
require('dotenv').config();
const myEvent = require('./events');
const storName = process.env.STORE_NAME;

myEvent.on('delivered',deliveredDriver);

/**
 * in-transit event listener return a confirmation message to the driver
 */
function deliveredDriver(payload) {
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
}

/**
 * createOrder() is afunctio that create new fake order every 5 sec
 * and recole it self over and over again to simulate the real CAPS
 */
function createOrder() {
    // createOrder(sendEmail, 5000);
    let newOrder = {
        storeName: storName,
        orderId: faker.random.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    console.log('*******************New Order*************************');
    setTimeout(createOrder, 5000);
    myEvent.emit('pickup', newOrder)
}
setTimeout(createOrder, 5000);
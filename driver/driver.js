/* eslint-disable no-undef */
'use strict';

const io = require('socket.io-client');

const driver = io.connect('http://localhost:3000/caps');

driver.on('pickup', payload => {
    setTimeout(
        () => {
            console.log(`driver picked up the package ${payload.orderId}`);
            driver.emit('in-transit', payload);
        }
        , 1500);
    setTimeout(
        () => {
            console.log(`driver delivered up the package ${payload.orderId}`);
            driver.emit('delivered', payload);
        }
        , 3000)
})
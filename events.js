/* eslint-disable no-undef */
'use strict';

const Event = require('events');
/**
 * this modle is just a global event pool that sherd between all the other files that used event
 * that make all the project use only one enstance of the Event class
 */
module.exports = new Event();
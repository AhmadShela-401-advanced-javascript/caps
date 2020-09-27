# CAPS - The Code Academy Parcel Service

CAPS will **simulate** a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

## Technical features :

* events.js - Global Event Pool (shared by all modules)
* caps.js - Main Hub Application
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. `“EVENT {}”`
* vendor.js - Vendor Module
    * Declare your store name (perhaps in a .env file, so that this module is re-usable)
    * Every 5 seconds, simulate a new customer order
        * Create a fake order, as an object:
            * storeName, orderId, customerName, address
        * Emit a ‘pickup’ event and attach the fake order as payload
            * HINT: Have some fun by using the faker library to make up phony information
    * Monitor the system for events …
        * Whenever the ‘delivered’ event occurs
            * Log “thank you” to the console

* driver.js - Drivers Module
    * Monitor the system for events …
    * On the ‘pickup’ event …
        * Wait 1 second
            * Log “DRIVER: picked up [ORDER_ID]” to the console.
            * Emit an ‘in-transit’ event with the payload you received
        * Wait 3 seconds
            * Log “delivered” to the console
            * Emit a ‘delivered’ event with the same payload

## Installation :

* clone the repo into your PC using `git clone 'Repo Link'`
* open the repo file using your terminal and type `npm init -y`
* download the folowing libraries using `npm i `
* start the project using `node ./cap.js`
jest.useFakeTimers();
const events = require('../events');
require('../caps');

const mockObj = {
    storeName: 'test',
    orderId: '010101',
    customerName: 'Ahmad',
    address: 'Amman',
};
console.log = jest.fn();

describe('Orders', () => {
    it('log pickup', () => {
        events.emit('pickup', mockObj);
        expect(console.log).toBeCalled();
    });

    it('log in-transit', () => {
        // console.log = jest.fn();
        events.emit('in-transit', mockObj);
        expect(console.log).toBeCalled();
    });

    it('log delivered', () => {
        // console.log = jest.fn();
        events.emit('delivered', mockObj);
        expect(console.log).toBeCalled();
    });
});
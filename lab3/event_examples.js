const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event
const helloFn = () => {
    console.log('Hello world');
}

// Create an event handler
eventEmitter.on('hello', helloFn);
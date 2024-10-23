const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
const myEmitter = new EventEmitter;

myEmitter.on('name-order',birthdayEventListener);
myEmitter.emit('name-order','Yunanto');
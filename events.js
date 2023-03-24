// const EventEmitter = require("events")
// const emitter = new EventEmitter();
// // register a listener
// emitter.on('messageload',()=>{
// 	console.log('listener called')
// })
// emitter.on('messageload',()=>{
// 	console.log('listener called');
// })
// // raise an event
// emitter.emit("messageLogged");

var events = require('events');
var eventEmitter = new events.EventEmitter();


var listner1 = function listner1() {
   console.log('listner1 executed.');
}


var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.on('dhanush',()=>{
	console.log("dhanush")
})
// Fire the connection event 
eventEmitter.emit('connection');


// Fire the connection event 
eventEmitter.emit('dhanush');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
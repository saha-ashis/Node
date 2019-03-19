const EventEmitter=require('events');
const eventEmitrObj=new EventEmitter();
console.log(eventEmitrObj);
eventEmitrObj.on('messageLogged',function(){ // Register an Event
    console.log('This is Event Emitter! Listener Called');
})
eventEmitrObj.emit('messageLogged'); //Raise and Event
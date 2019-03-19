const EventEmitter=require('events');
const eventEmitterObj=new EventEmitter();
eventEmitterObj.on('messageLogged',function(eventArg){
    console.log('Listner Called with the Arguments', eventArg)
})

eventEmitterObj.emit('messageLogged',{id:1,name:'Ashis',url:'http://abc.com'});

const EventEmitter=require('events');
const emitterObj=new EventEmitter();
emitterObj.on('messageLogger',(eventArgs)=>{
    console.log('Event Listener With Fat Arrow & Args',eventArgs);
})
emitterObj.emit('messageLogger',{id:1,name:'Ashis Saha',url:'http://asaha.com'});

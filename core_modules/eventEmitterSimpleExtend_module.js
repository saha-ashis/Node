const EventEmitter=require('events');
class MyEmitter extends EventEmitter{
}
const myEmitrObj=new MyEmitter();
myEmitrObj.on('messageLogger',()=>{
    console.log('Events Listner from my Class!');
})
myEmitrObj.emit('messageLogger');
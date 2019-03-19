const EventEmitter=require('events');
class Logger extends EventEmitter{
    logMessage(message){
        console.log(message);
        this.emit('myMessageLogger',{id:1,name:'Ashis Saha',URL:'https://thisisashis.com'})
    }
}
module.exports=Logger;
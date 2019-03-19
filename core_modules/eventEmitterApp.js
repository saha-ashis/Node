const Logger=require('./evtEmitrExtending_module');
const loggerObj=new Logger;
loggerObj.on('myMessageLogger',(myArg)=>{
    console.log('Listener Called from Exteding',myArg);
});
loggerObj.logMessage('Hello Listener please call my Function!');

const os=require ('os');
//import 'os';
//console.log(osmoduls);
var totalMemory=os.totalmem();
var freeMemory=os.freemem();
console.log(`Total Memory:${totalMemory}`);
console.log(`Free Memory:${freeMemory}`);

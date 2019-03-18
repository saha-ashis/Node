const path=require('path'); // Provides Utility for working with the files and directory path.
//import path from 'path'; // In ES6 format
pathObj=path.parse(__filename);
console.log(pathObj); 
/**
 * output
 * { 
  root: 'E:\\',
  dir: 'E:\\node_practices\\core_modules',
  base: 'path_module.js',
  ext: '.js',
  name: 'path_module' 
}
 */
import * as myModule from '/src/modules/namedModule';

console.log(myModule.myNumber);
myModule.increaseNumber();
console.log(myModule.myNumber);
// myModule.myNumber++; // TypeError

// this also works
// import {getNumber} from 'namedModule';
// console.log(myModule.getNumber());


/*
one module per file
use keyword export to export, import to import
two ways to export: named modules or default modules
"asynchronous" because it's loaded at runtime
modules can be imported via relative (../module) or absolute (/src/modules/module) path
*/
var outerVar = 0;
let outerLet = 1;
if (outerVar >= 0) {
  var innerVar = 2;
  console.log ('outerVar: ' + outerVar);
  console.log('outerLet: ' + outerLet);
  // no more IIFEs for local variables, just use a block
  let innerLet = 3;
}
console.log('innerVar: ' + innerVar);
console.log('innerLet: ' + innerLet);

var test = [1, 2, 3, 4, 5];
var testTotal = 0
for (var i = 0; i < test.length; i++) {
  testTotal += test[i];
}
console.log("leaked i: " + i);
for (let j = 0; j < test.length; j++) {
  testTotal += test[i]
}
console.log("leaked j: " + j);

const myConstantStr = "jason";
const myConstantObj = {};
myConstantObj.uncle = "joe";
console.log(myConstantObj.uncle);

const myConstantFreeze = Object.freeze({});
/*
let and const are transpiled to _var
**NOTE: const means the variable always has the same value, aka it's mutable
use const for things that are completely immutable (exception: mutable objects are okay)
use let for mutable things
avoid var
*/
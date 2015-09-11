let myArray = [1, 2, 3];
let total = myArray.map(x => x + x);
console.log(total);

/*
Similar in syntax to lambdas in C#
Share the same lexical this as surrounding code
Work in block scopes (e.g. event listeners) or expressions (e.g. array.map())
*/
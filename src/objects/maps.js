let myMap = new Map();
myMap.set('company', 'rightpoint');
myMap.set('color', 'orange');
console.log(myMap);

// console.log('keys: ' + myMap.keys());
// console.log('values: ' + myMap.values());
// console.log('entries: ' + myMap.entries());

// let hasCompany = myMap.has('company');
// console.log('has company key: ' + hasCompany);

// myMap.set('locations', ['chicago', 'michigan', 'denver']);

// for (let [key, value] in myMap) {
// 	 console.log('key: ' + key + ', value: ' + value);
// }

// myMap.set('color', 'orange');
// console.log(myMap);
// myMap.delete('color');

// myMap.clear();

var map = new Map().set({}, 1).set({}, 2);
let val = map.get({});
console.log(val);
/*
	similar features to sets, except intead of adding you set
	new Set() can take one argument, must be iterable
*/
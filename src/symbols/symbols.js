var foo = {a:1};
var sym = Symbol(foo);
var bar = {
  [sym]: 'a'
};

console.log(bar[sym]);
// par
function x2(a, b, ...otherArgs){
  // do something with otherArgs
}

function printArray([head, ...tail]){
  console.log(head);
  if(tail.length){
    printArray(tail);
  }
}


printArray([1,5,8,6,8,2,5]);

// object destructuring
function getThing(){
  return {
    size: 'large',
    colour: 'orange',
    madeOf: 'stone?',
    disposition: 'mainly grumpy'
  };
}

var {size, colour, madeOf} = getThing();

console.log(size + ', ' + colour + ' and made of '+ madeOf);
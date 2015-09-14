function getDefaultParam(){
  return 180;
}


function staticDefault(param = 0){
	return param;
}

function expressionDefault(param = getDefaultParam()){
  return param;
}


console.log('static based: ',staticDefault(999));
console.log('static based: ',staticDefault());

console.log('function based: ',expressionDefault(999));
console.log('function based: ',expressionDefault());


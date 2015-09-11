// ES5
function getId(id) {
	return id;
}

function process(item) {
	let newItem = item + 1;
	return getId(newItem);
}

console.log(process(item));

// ES6


/*
	any tail calls can be optimized (doesn't matter how they're called)
	tail call optimization prevents getId() from having a new stack created
	
*/
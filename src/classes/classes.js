class Employee {
	constructor(name, job) {
		this.name = name;
		this.job = job;
	}
}

class Greenskeeper extends Employee {
	constructor(name, job, accomplishments) {
		super(name, job);
		this.accomplishments = accomplishments;
		this.myFavorite = 'no one yet';
	}
	listAccomplishments() {
		for (let a in this.accomplishments) {
			console.log(this.name + ' once ' + this.accomplishments[a]);
		}
	}
	static myStaticMethod() {
		return 'static method!';
	}

	static get boss() {
		return new Employee('My Boss', 'Head Greenskeeper');
	}
	get favoriteGolfer() {
		return this.myFavorite;
	}

	set favoriteGolfer(golfer) {
		this.myFavorite = golfer;
	}
}

Greenskeeper.anotherStaticProperty = 'another static property'

let carlsAccomplishments = ['became a cinderella-story masters champion', 'almost killed a gopher'];
let carl = new Greenskeeper('Carl Spackler', 'Greenskeeper', carlsAccomplishments);
console.log(carl.listAccomplishments());

// console.log('favorite golfer? ' + carl.favoriteGolfer);
// carl.favoriteGolfer = 'Ty';
// console.log('favorite golfer? ' + carl.favoriteGolfer);

// console.log(Object.getPrototypeOf(Greenskeeper) === Employee);

// function instantiate(myClass, args) {
//   return new myClass(...args);
// }
// let carlsClone = instantiate(Greenskeeper, ['Carls clone', 'Former Greenskeeper', ['none yet']]);
// console.log('carls clones favorite golfer? ' + carlsClone.favoriteGolfer);

/*
static methods are attached to Greenskeeper
prototype methods are attached to Greenskeeper.prototype
really nice for type checking
subclassing is supported without a plugin
**Classes look like objects, but are actually functions
*/
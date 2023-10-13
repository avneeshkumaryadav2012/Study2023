//https://www.youtube.com/watch?v=ZkXKREktmSo

// - [ ] SuperSet of JAVAScript
// - [ ] Developed By MicroSoft
// - [ ] Complie with in JS
// - [ ] VS Code Support  
// - [ ] Easy to Write Code 
// - [ ] Catch Error on Compile Time


`- [ ] Tuples || Stricly Follow Match Types`;
`- [ ] Interface  || In the we can check Data type of Object  and "|" Union "&" intersection `;
`- [ ] Type Alies || with | Both or Multiple Typer like type a = String | Number  `;
`- [ ] Implements ||  in Class check declear Public , Private and protected`;
`- [ ] Genaric || dynamically handle types when we don't decide or handle multiple types `;


let number: Number;
number = 1;

function sum (a: number, b: number) :number {
    return a+b
}

let add = sum(1,2);
console.log(add);


// Tuples

let address : [name: string, near: String, Pin: number];
address = ['avneesh','home', 1234];
console.log(address);


// Interface 

interface User {
	id: number;
	name: String;
	age?: Number;
}

let a: User;
a = {id: 1, name: 'avvv'}


interface UserRoll {
	roll: number;
	name: String;
	age?: Number;
}

let u : User | UserRoll   /// Union 
// let u : User & UserRoll   /// InterSection 

u = { name: 'avneesh', id: 1, roll : 40}


// Type Alies

 type a = String | Number 

a : 'Avneesh'; // ✅
a : 20 //✅
a : false //❌

type T = String & Number  // Never Type 
// T[]:[];
// T.push('Avneesh')  //❌ // Never Array 


// Implements


interface UserRoll {
	roll: number;
	name: String;
	age?: Number;
}


class Car implements UserRoll, Others {
	constructer ( public roll, public name){

    }
	getName() {
		console.log(this.name)
	}
}
let k = new Car()
console.log(k)


// Genaric 

function Gen<N> (a: N,b: N): N[] {
    return [a,b];
}

console.log(Gen<String>('a','b'))
console.log(Gen<Number>(1,2))

// Extends is a Data Modles

function Coder<N extends {id: number}> (person: N) {
    return person.id;
}
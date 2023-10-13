//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
  console.log(i);
  numbers.push(i + 1);
}
console.log(numbers); // Output =  [5]

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function foo() {
  let a = (b = 0);
  a++;
  return a;
}

console.log(foo()); // 1
console.log(b); // 0
console.log(typeof a); // undefined
console.log(typeof b); // number
console.log(a); //Error:  a is not defined

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const arr1 = [2, 4, 5, 6];
const arr2 = [5, 6, 7, 8, 9];
console.log(arr1.filter((item) => !arr2.includes(item)));
console.log(arr2.filter((item) => !arr1.includes(item)));

//<<<<<<<<<<<<<<<<<<<<<<<< Print elements having frequincy more than or equal to 4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Array1 = [
  1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 8
];
// Print elements having frequincy more than or equal to 4

// Mathed 1
const sort = [...new Set(Array1.filter( (a, i) => a>=9 ))]
console.log(sort);


// Mathed 2
const frequencyMap = {};

// Count the frequency of each element in Array1
for (const num of Array1) {
  if (frequencyMap[num]) {
    frequencyMap[num]++;
  } else {
    frequencyMap[num] = 1;
  }
}
console.log("frequencyMap", frequencyMap); // { '1': 1, '2': 1, '3': 2, '4': 6, '5': 6 }

// Find elements with a frequency greater than or equal to 4
const elementsWithFrequencyFourOrMore = [];

for (const num in frequencyMap) {
  if (frequencyMap[num] >= 4) {
    elementsWithFrequencyFourOrMore.push(parseInt(num)); // Convert num back to integer
  }
}
// This program uses an object (frequencyMap) to count the frequency of each element in Array1.
// Then, it iterates through the object to identify elements with a frequency greater than or equal to 4
//  and prints them to the console.
console.log("Elements with frequency >= 4:", elementsWithFrequencyFourOrMore); // [ 1, 4, 5 ]

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function add(a, b) {
  //b= undefined
  return a + b; //25+undefined = NAN
  // return a-b;  //25-undefined = NAN
}
console.log(add(25)); // NAN

function add(a, b) {
  return a + b; //25+test = 25test
  // return a-b;  //25-undefined = NAN
}
console.log(add(25, "test")); //

function add(a, b) {
  return a + b; //25+10 = 35
  // return a-b;  //25-10 = 15
}
console.log(add(25, 10));

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const clothes = ["car", "bike"];
clothes.length = 0;
console.log(clothes); // []
console.log(clothes[0]); // undefined

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function foo() {
  var bar = "I'm a bar variable";
  function bar() {
    return "I'm a bar function";
  }
  return bar();
}

console.log(foo()); // TypeError: bar is not a function

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

greeting();
var greeting = function () {
  console.log("Good morning");
};
greeting();

function greeting() {
  console.log("Good evening");
}
greeting();

//Good evening
//Good morning
//Good morning

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let mobilesdata = [
  [1, 2],
  [4, 3, 5, [6, 7, 8, [10, 11, 12, 13]]],
  14,
  [15, 16, 17],
];
var newArray = [];
function push_element(value) {
  if (Array.isArray(value)) {
    for (let element of value) {
      if (Array.isArray(element)) {
        push_element(element);
      } else {
        newArray.push(element);
      }
    }
  } else {
    newArray.push(value);
  }
}

for (let value of mobilesdata) {
  push_element(value);
}

console.log(mobilesdata.flat(Infinity)); //output [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

console.log(newArray); //output [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Method 1 st
const data = [1, [2, [3], 4, [5, 6, [7, [8, 9]]]]];
console.log(data.flat(Infinity));

//Method 2 nd
const rescursion = (data) => {
  const newArra = data.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(rescursion(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return newArra;
};
console.log(rescursion(data));

//Output: [1, 2, 3, 4, 5, 6, 7, 8, 9];

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let mobiles = [["pankaj,yadav"], ["gender", "male"]];

var output_array = [];
for (let value of mobiles) {
  if (Array.isArray(value)) {
    for (let string of value) {
      var split_array = string.split(",");
      if (Array.isArray(split_array)) {
        for (let element of split_array) {
          output_array.push(element);
        }
      } else {
        output_array.push(element);
      }
    }
  } else {
    output_array.push(value);
  }
}

console.log(output_array); //[‘'pankaj’,’kumar’,’gender’,’male’]

Or;

let mobiles1 = [
  ["pankaj", "yadav"],
  ["gender", "male"],
];
var output_array = [];
for (let value of mobiles1) {
  output_array = output_array.concat(value);
}

console.log(output_array); //[ 'pankaj', 'yadav', 'gender', 'male' ]

Or;

let mobiles2 = [
  ["pankaj", "yadav"],
  ["gender", "male"],
];
var output = mobiles2.reduce((prev, next) => prev.concat(next));
console.log(output); //[ 'pankaj', 'yadav', 'gender', 'male' ]

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//MISSING VALUE PROBLEM

let MISSING = [1, 2, 4, 5, 10];
let maxVal = Math.max(...MISSING);
console.log(maxVal); //10

var output = [];
for (let i = 1; i <= maxVal; i++) { 
  if (!MISSING.includes(i)) {
    output.push(i);
  }
}

console.log(output); //[ 3, 6, 7, 8, 9 ]

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// COPY ARRAY CORRECT WAY
const animal = "Paret";
const export_animal = [...animal];
console.log(export_animal);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Reverse Any Array
const ArraySq = [1, 2, 3, 4, 5, 6];

// Option 1 :
ArraySq.reverse(); // [ 6, 5, 4, 3, 2, 1 ]

//Option 2 :

var revArray = [];
for (let i = ArraySq.length - 1; i >= 0; i--) {
  revArray.push(ArraySq[i]);
}

console.log("revArray", revArray);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Reverse Any String
const youtName = "pankajyadav";
const splitName = youtName.split("").reverse().join("");
console.log("splitName", splitName); //splitName vadayjaknap

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let specialForces=["BlackCats","Marcos", "Demolishers","HeadHunters"];  
let  name = specialForces.includes("HeadHunters");  


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Swap two variables?

 //Way 1:
let a=5; let b=10;
[a,b]=[b,a];
console.log(a,b);

//Way 2:
// let a=10; let b=5;
a=a^b;
b=a^b;
a=a^b;
console.log(a);
console.log(b);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function foo() {
    var a = b;
   b=4;
  }
  console.log(typeof a,typeof b); //undefined undefined
  

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    function add(a, b){
        return a+d;
    }
    console. log(add (52));
    
    function test(a,b){
        let a-b=2;
    }
    console. log (type0f a, typeof b); //a is already defined
    console. log(1>2>3); //false console. log (1<2‹3); //true
    console.log(this); //Window {0: Window, window: Window, self: Window, docu

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ES6 Array methods?

Array.of()
Array.from()
Array.prototype.copyWithin()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.entries()
Array.prototype.keys()
Array.prototype.values()
Array.prototype.fill()


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let colors=new Set(['Green', 'Red', 'Orange', 'Yellow', 'Red', `Red`]);
console.log(colors);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// What is the difference between for..in and for..of?
 
let list= [2,6,9,4,5];
for(let i in list){
console.log(i); //0,1,2,3,4
}
for(let i of list){
console. log (value); //2,6,9,4,5
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const string = 'Welcome to the interview';

const x = string.split(' ');

const output = x.map( (item)=> item.split('').reverse().join(''));

console.log(output.join(' '));



const person = {name :'Tiger'};
let animals = {name :'Lion'};

person =  animals;

console.log(person);



const object1 = {
    who: 'World',
   a() {
      return `Hello, ${this.who}!`;
    },
    b: () => {
      return `Goodbye, ${this.who}!`;
    }
  
  };
  console.log(object1.a());
  console.log(object1.b());

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const string = 'Welcome to the interview';

const x = string.split(' ');

const output = x.map( (item)=> item.split('').reverse().join(''));

console.log(output.join(' '));



// const person = {name :'Tiger'};
// let animal = {name :'Lion'};

// person =  animal;

// console.log(animal);



// const object = {
//     who: 'World',
//    a() {
//       return `Hello, ${this.who}!`;
//     },
//     b: () => {
//       return `Goodbye, ${this.who}!`;
//     }
  
//   };
//   console.log(object.a());
//   console.log(object.b());

<!-- 
// Q-1:-Concat for Merge

const array1 = [1,2,3]
const array2=[4,5,6]
console.log(array1.concat(array2));

Output:[1,2,3,4,5,6]

// Q-2: filter for Condition 
const array1 = [1,2,3,4]
const filter = array1.filter((a)=>a>1) 
console.log(filter);

Output: [2,3,4]

// Q-3: find
const array1 = [1,2,3,4];
const find = array1.find((a)=>a>1)
console.log(find);

Output:2

// Q-4:
const array1 = [{id:1, name:'shoeb'},{id:2, name:'shoeb2'},{id:3, name:'shoeb3'}]
const find = array1.findIndex(({id})=>id===2)
console.log(find);

Output: 1

// Q-5:
// The main differences between map and forEach is that the map method returns a new array and forEach does not
// returns anything.
  
const array1 = [1,2,3,4]
const test = array1.forEach((a)=>a)
console.log(test);

Output:undefined


// Q-6:
const array2 = [1,2,3,4]
const test = array2.map((a)=>a)
console.log(test);

Output:[1,2,3,4]

// Q-7:
// includes method return true/false if an array contains the specified value, it is case sensitive
const array = [1,2,3,4]
const test = array.includes(1)
console.log(test);
Output: true

// 2nd Ex-
    const arr1=[{id:1,name:'shoe'},{id:2,name:'shoe2'}]
    const isInclude= arr1.map( (item)=> item.id ).includes(2)
    console.log(isInclude);
    Output: 1

// Q-8:
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.

const array = [1,2,3,4]
const test = array.indexOf(3)
console.log(test);

Output: 2

// Q-9:

const array = [1,2,3,4]
const test = array.length
console.log(test);

Output: 4

// Q-10:
// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.


const array = [1,2,3,4,1,5,1]
const test = array.lastIndexOf(1)
console.log(test);

Output: 6

// Q-11:
// The push() method adds new items to the end of an array.
const array = [1,2,3,4]
array.push(5)
console.log(array);

Output: [1,2,3,4,5]

// Q-12:
// The reduce() method returns a single value: the function's accumulated result.

const array = [1,2,3,4]
const test = array.reduce((n,a)=>n+a)
console.log(test);

// initial value n starts with 0

Output:10

// Q-13:
// Slice method extracts part of string and returns the new extracted part in string.
// The method takes 2 parameters, the starting index and the ending index(just before that no.).

let str = "My name is shoeb"
let sliceString = str.slice(3,9)  //But 9 not include means till 8
console.log(sliceString)
// output: "name i"

example-2 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log('citrus', citrus);

Output: ["Orange", "Lemon"]

// Q-14:
// The some() method checks if any array elements pass a test, it returns true/false.

const list = [{id:1,isActive:false}, {id:1,isActive:false}, {id:1,isActive:true}];
const test = list.some(({isActive})=>isActive===true)
console.log(test);

Output: true

// Q-15:
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// It performs operation on original array.

Syntex: array.splice(startfrom, deleteCount, replaceValues)
Example-1

let ShoebArray = ["shoeb0", "shoeb1", "shoeb2", "shoeb3","shoeb4","shoeb5"]
// Will assume startFrom(0) and deleteCount(1)
console.log(ShoebArray.splice(1))
Output ["shoeb1", "shoeb2", "shoeb3","shoeb4","shoeb5"]

// Remove shoeb2,shoeb3
let ShoebArray = ["shoeb0", "shoeb1", "shoeb2", "shoeb3","shoeb4","shoeb5"]
ShoebArray.splice(2,2)  
console.log(ShoebArray)
output: ["shoeb0", "shoeb1","shoeb4","shoeb5"]


// Insert element

let ShoebArray = ["shoeb0", "shoeb1", "shoeb2", "shoeb3","shoeb4","shoeb5"]
ShoebArray.splice(2,0,"ANASRI")  
console.log(ShoebArray)
output: ["shoeb0", "shoeb1", "shoeb2","ANSARI", "shoeb3","shoeb4","shoeb5"]

// DELETE THEN INSET element

let ShoebArray = ["shoeb0", "shoeb1", "shoeb2", "shoeb3","shoeb4","shoeb5"]
ShoebArray.splice(2,4,"ANASRI")  
console.log(ShoebArray)
output: ["shoeb0", "shoeb1","ANSARI",]


// Example-2
 const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//<!-- https://www.w3schools.com/jsref/jsref_concat_array.asp -->


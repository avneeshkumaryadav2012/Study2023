
[3,2,3,4,3].find(i => i === '3') // output undefind
 [3,2,3,4,3].filter(i => i === '3') //output [3,3,3]

var a =[1,2,3,4,5,6,7];
var b =a;
b.push("8")

console.log(a); // [1,2,3,4,5,6,7,'8']
console.log(b); // [1,2,3,4,5,6,7,'8']

Console.log(true+"1") // true1
Console.log(true+true+"1") // 21
Console.log(true+1) // 2
console.log('' + 1 + 5); // 15

var arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

console.log(isEmpaty(arr))

//needed - [15, -22, 47]


var Temp1 =[{FirstName:'Vivek', Id:1},{FirstName:'Vinay', Id:2}]
var Temp2 =[{LastName:'A', Id:2},{LastName:'D', Id:1}];

Temp1.conct(Temp2)

//Expected Output  = [{FirstName:'Vivek', LastName:'D', Id:1},{FirstName:'Vinay', LastName:'A', Id:2}];


// ✅ Count occurrences of each element in an array
const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
console.log(count); // 👉️ {a: 3, b: 1, c: 2}

var out = {}
for(var val of arr){
	if(out[val]){
  	out[val]++;
  }else{
  	out[val]= 1;
  }
}







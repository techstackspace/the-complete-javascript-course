const num = +2; // +2 === 2
console.log(num); // 2

const toNum = +true;
console.log(toNum); // 1

const toStringValue = "34";
console.log(+toStringValue); // Number(toStringValue) - 34

console.log(typeof num, typeof toNum, typeof toStringValue); // number, number, string

const typeofValue = typeof num;
console.log(typeof typeofValue); // string

const personInfo = {
	name: "John",
	age: 55,
	kids: ["Tom", "Jack", "Bob"],
	isMarried: true,
};

console.log(delete personInfo.name); // true
console.log(personInfo); // { age: 55, kids: [ 'Tom', 'Jack', 'Bob' ], isMarried: true }

console.log(delete personInfo.kids[1]); // true
console.log(personInfo); // { age: 55, kids: [ 'Tom', empty, 'Bob' ], isMarried: true }

console.log(void personInfo.age); // undefined;
console.log(personInfo); // { age: 55, kids: [ 'Tom', empty, 'Bob' ], isMarried: true }

console.log(void personInfo); // undefined
console.log(personInfo); // { age: 55, kids: [ 'Tom', empty, 'Bob' ], isMarried: true }

// x++
let age = 34;
age++; // 34 (age += 1)
console.log(age); // 35

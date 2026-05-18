let favoriteNumber = 34; // number
favoriteNumber = "69"; // string
console.log(favoriteNumber);

// Data Types
// 1. Number
//    - Integer
//    - Floating point
//    - Infinity
//    - -Infinity
//    -  NaN

const userWeight = 34.6;
console.log(userWeight, Infinity);
console.log(2 / 0);
console.log("This is a text" / 34);
console.log(NaN ** 0);

// BigInt
console.log(2 ** 53 - 1);
// 9007199254740991

const maxNum = 2 ** 53 - 1;
console.log(maxNum + 1);
console.log(maxNum + 2);

const minNum = -(2 ** 53 - 1);
console.log(minNum - 1);
console.log(minNum - 2);

const sandCount = 1212232342352535235353523534n;
console.log(sandCount);

// String
const currentUser = "John Doe";
const pageLoadTime = "23ms";
const personAddress = `dsadaevwvwv`;

console.log(currentUser, pageLoadTime, personAddress);

// Boolean
// True or False
console.log(true, false);
const isOlder = 34 > 23;
console.log(isOlder);

const isYounger = 34 < 23;
console.log(isYounger);

// Null
let age = null;
age = 45;
console.log(age);

// undefined
let personAge;
console.log(personAge);

// Symbol
Symbol("id");

// Objects (Non-Primitive)
const myTechStack = ["Bun", "Node", "JavaScript"];
myTechStack[1] = "Demo";
console.log(myTechStack);

const personInfo = {
	userName: "Michael",
	age: 78,
	hasKid: true,
};

personInfo.userName = "Osagie";
console.log(personInfo);

// Typeof Operator

console.log(typeof favoriteNumber);
console.log(typeof userWeight);
console.log(typeof sandCount);
console.log(typeof currentUser);
console.log(typeof isOlder);
console.log(typeof age);
console.log(typeof personAge);
console.log(typeof myTechStack);
console.log(typeof personInfo);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
// console.log(typeof null);
console.log(typeof (3 + 6));

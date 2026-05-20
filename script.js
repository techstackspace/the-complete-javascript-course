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
console.log("This is a text" / 2);
console.log(NaN ** 0);
// *, /, -, +, ...

// 2. BigInt
console.log(2 ** 53 - 1);
// 9007199254740991

const maxNum = 2 ** 53 - 1;
console.log(maxNum + 1);
console.log(maxNum + 2);

const sandCount = 43774345756757567574567n;
console.log(sandCount + 532323343242342342n);

const minNum = -(2 ** 53 - 1);
// -9007199254740991
console.log(minNum - 1);
console.log(minNum - 2);

const bacteriaDiameter = -4565656757745656456457n;
console.log(bacteriaDiameter - 103n);

// 3. String
const currentUser = "John Doe";
const pageLoadTime = "23ms";
const userAddress = `9 Newcastle way, VI`;

console.log(currentUser, pageLoadTime, userAddress);

// 4. Boolean (Logical Type)
console.log(true, false);
const isOlder = 34 > 23;
console.log(isOlder);

const isYounger = 34 < 23;
console.log(isYounger);

// 5. Null
let age = null;
age = 45;
console.log(age);

// 6. Undefined
let personAge;
console.log(personAge);

let orderPrice = 1000;
orderPrice = undefined;
console.log(orderPrice);

// 7. Symbol
Symbol("id");

// 8. Object
const myTechStack = ["Bun", "Node", "Python"];
myTechStack[1] = "Deno";
console.log(myTechStack);

const personInfo = {
	userName: "Michael",
	age: 78,
	hasKids: true,
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
console.log(typeof null); // object
console.log(typeof alert); // function
console.log(typeof Math); // object
console.log(typeof 10n);
console.log(typeof (2 * 5));

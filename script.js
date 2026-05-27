// Type Coercion
// 1. Implicit Coercion
// 2. Explicit Coercion - Number(), String(), Boolean, BigInt()

// String to number
console.log("5" - 2); // 3

// Number to string
// console.log("5" + 2); // 52
console.log(`${5 + 2}`); // 7

// Boolean to number
console.log(true + 1); // 2
console.log(false + 1); // 1

// Loose equality (==)
/* console.log("1" == 1); // true
console.log(true == 1); // true */

// Strict equality (===)
console.log("1" === 1); // false
console.log(true === 1); // fasle

// Boolean Context
/* if (condition statement) {
	// body statement
} else {
	// body statement
} */

console.log(Boolean(0));
/* if (1) {
	console.log("It is true");
	// true statements here
} else {
	console.log("It is false");
	// false statements here
} */

// Mixed expression
// console.log(4 + 2 + true + "7" + 9); // 6 + 1 = 7, "77", "779"
console.log(6 + 9 - 3 - "5" + 6 - 4 + true); // 15 - 3 = 12, 12 - "5" = 7, 7 + 6 = 13, 13 - 4 = 10

// console.log("6" / "3" + 4 + "5"); // 2 + 4 = 6, "65"

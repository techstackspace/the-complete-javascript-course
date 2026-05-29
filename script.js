// Type Coercion
// 1. Implicit Coercion
// 2. Explicit Coercion - Number(), String(), Boolean(), BigInt()

// Comparison operators
// less than - <
// greater than - >
// less than or equal to - <=
// greater than or equal to - >=

// Equality operators
// Loose equality (==)
// Strict equality (===)
// Not equal (!=)
// Strict not equal (!==)

// 1. Implicit Coercion
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
// falsy values - false, 0, -0, 0n, "", null, undefined, NaN
/* if ("str") {
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

console.log(+null); // 0
console.log(+undefined); // NaN

console.log(null == undefined); // true
console.log(null === undefined); // false

/* const a = 0;
const b = "0";
console.log(!!a == !!b); // false
console.log(a == +b); // true */

const isTrue = 0;
console.log(!isTrue); // false
console.log(!!isTrue); // true

// console.log("hello" / 3); // NaN

console.log(null == 0); // false
console.log(null === 0); // false

/* console.log("5" != 5); // false
console.log("5" != 5); // true */

console.log(4 + 2 + "8" / "2" - 3 * 2); // 4 + 2 + 4 - 6, 4

// 2. Explicit Coercion (Type-casting)
// Number(), String(), Boolean(), BigInt()
const str = "34";
const toNum = Number(str);
console.log(toNum, typeof toNum); // 34, number

const text = "This is a text";
const toNumb = Number(text);
console.log(toNumb, typeof toNumb); // NaN, number

const numberValue = "";
const toBool = Boolean(numberValue); //
console.log(toBool, typeof toBool); // true, boolean

const MAX_NUM = 2 ** 53 - 1;
const MAX_SAFE_NUM = Number.MAX_SAFE_INTEGER;
console.log(MAX_SAFE_NUM); // 9007199254740991
console.log(BigInt(MAX_NUM) + 34n); // 9007199254741025n
console.log(BigInt(MAX_NUM + 34)); // 9007199254741024n

// Type Coercion
// 1. Implicit Coercion
// 2. Explicit Coercion - Number(), String(), Boolean(), BigInt()

// - Comparison operators
// less than - <
// greater than - >
// less than or equal to - <=
// greater than or equal to - >=

// - Equality operators
// Loose equality (==)
// Strict equality (===)
// Not equal (!=)
// Strict not equal (!==)

console.log(5 > 2);
console.log("5" > 2);
console.log(+null); // 0
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null >= 0); // true

console.log("H" > "A"); // true
console.log("party" > "part"); // true
console.log("party" > "pert"); // false
console.log("2" > "14"); // true
console.log("2".codePointAt(0)); // 50
console.log("1".codePointAt(0)); // 49
console.log("hello");
console.log("hello"[0]); // 'h'
console.log("H".codePointAt(0)); // 72
console.log("A".codePointAt(0)); // 65
console.log("a".codePointAt(0)); // 97
console.log("a" > "A"); // true

console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false
// console.log(undefined == 0); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

console.log("|".codePointAt(0)); // 124
console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 122

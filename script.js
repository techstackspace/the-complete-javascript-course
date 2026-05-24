console.log(10 + 5);

// 1. Arithmetic (Math) Operator

// addition - +
// substraction - -
// multiplication - *
// division - /
// exponentiation - **

const GRANDPA_BIRTHYEAR = 1950;
const currentYear = 2000;

const grandpaAge = currentYear - GRANDPA_BIRTHYEAR;
console.log(grandpaAge);

const MAX_NUM = 2 ** 53 - 1;
console.log(BigInt(MAX_NUM * 2));

const randomNum = 2 ** 4;
console.log(randomNum); // 2 * 2 * 2 * 2

const sum = 4 + 19;
console.log(sum);

// 2. Assignment Operator
// 	- Compound assignment
let personAge = 10;
console.log(personAge); // 10
personAge += 1;
console.log(personAge); // personAge + 1 = 11
personAge -= 1;
console.log(personAge); // personAge - 1 = 10
personAge *= 2;
console.log(personAge); // personAge * 2 =20
personAge /= 2;
console.log(personAge); // personAge / 2 = 10

// 	- Increment/Decrement

// Postfix
// Increment
personAge++; // 10
console.log(personAge); // 11

// Decrement
personAge--; // 11
console.log(personAge); // 10

// Prefix
console.log(++personAge); // 11
console.log(--personAge); // 10

// 3. Comparison Operator
// greater than - >
// less than - <
// greater than or equal - >=
// less than or equal to <=

const ageJohn = 23;
const agePaul = 56;
const ageBob = 23;
const ageMichael = 43;

console.log(ageJohn > agePaul); // false
console.log(ageJohn < agePaul); // true
console.log(ageJohn >= ageBob); // true
console.log(ageMichael <= ageBob); // false

// 4. String Concatenation
const firstName = "Osagie";
const lastName = "Bello";

// console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

// 5. typeof Operator
console.log(typeof firstName); // string
console.log(typeof ageJohn); // number

// 6. Parentheses (Grouping)
const mediumAge = ageJohn + ageMichael / 2;
// (23 + 43) / 2 = 44.5
console.log(mediumAge);

let sarahAge = 45;
let jackAge = sarahAge; // 45

sarahAge = jackAge = 34 + 76;
console.log(sarahAge, jackAge);

let x, y, z;
x = y = z = 23;
console.log(x, y, z);

// Associativity (Execution Direction)
const num = 10 - 4 - 2; // left to right
console.log(num); // 4
let a, b;
a = b = 10 + 4; // right to left
console.log(a, b); // 14, 14

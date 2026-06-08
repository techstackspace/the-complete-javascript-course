// Block Scope
/* 
1. standalone block
2. if block
3. else block
4. else if block
5. switch block
6. for block
7. while block
8. do...while block
9. function body block
10. arrow function block body
11. try block
12. finally block
13. catch block
14. class body block
15. static initialization block
16. module scope block
*/

/* 
When a block has one statement, you can write it all in one statement without braces, 
or simply omit the braces and keep the statement at its initial line.
*/

console.log("----------standalone block----------");
// {...}
// Variable Shadowing
const greet = "Hello World"; // global variable
{
	const greet = "Good morning"; // local variable
	console.log(greet);
}
console.log(greet);
{
	const greet = "Good afternoon"; // local variable
	console.log(greet);
}

console.log("----------if block----------");
// Scope Chaining
const ageJohn = "34";
const isElder = ageJohn > 20;
let elderBrotherMessage;
let executionMessage;

if (isElder) {
	elderBrotherMessage = "John is mark's elder brother";
	executionMessage = "Code will be executed";
}

console.log(elderBrotherMessage);
console.log(executionMessage);

const ageSarah = 8;
if (ageSarah > 18) {
	console.log("Sarah has a driving licence");
}

console.log("----------else block----------");

let message;
if (ageSarah > 18) {
	message = "Sarah has a driving licence";
} else {
	message = "Sarah is still a teenager";
}

console.log(message);

console.log("----------else if block----------");

const workHour = 15;
let workStatusMessage;
if (workHour <= 9) {
	workStatusMessage = "Work hasn't started yet";
} else if (workHour >= 12) {
	workStatusMessage = "Work is most likely started";
} else {
	workStatusMessage = "It is public holiday";
}
console.log(workStatusMessage);

let ageMessage;
const myAge = 34;
if (myAge < 18) {
	ageMessage = "I am a teenager";
} else if (myAge > 18 && myAge <= 30) {
	ageMessage = "He might be his elder brother";
} else {
	ageMessage = "He is the eldest son of Sarah";
}
console.log(ageMessage);

const currentYear = 2080;
let eraMessage;

if (currentYear < 2050) {
	eraMessage = "We are in the Quantum AI Era";
} else if (currentYear === 2080) {
	eraMessage = "We are beyound the Quantum AI Era";
} else if (currentYear >= 2080) {
	eraMessage = "We now have robots working for us";
} else {
	eraMessage = "We are in the Generative AI Era";
}
console.log(eraMessage);

console.log("----------switch block----------");
const grade = "B";
let gradeMessage;

switch (grade) {
	case "A":
		gradeMessage = "Grade is A";
		break;
	case "B":
		gradeMessage = "Grade is B";
		break;
	case "C":
		gradeMessage = "Grade is C";
		break;
	default:
		gradeMessage = "Grade is F";
}
console.log(gradeMessage);

console.log("----------Nested if blocks----------");
const personAge = 18;

if (personAge >= 18) {
	const hasPermission = true;
	if (hasPermission) {
		const isAuthenticated = true;
		if (isAuthenticated) {
			const userName = "John Doe";
			if (userName) {
				console.log(`User, ${userName} can have access to the website`);
			}
		}
	}
}

const hasPermission = true;
const isAuthenticated = true;
const userName = "Osagie Bello";

if (personAge >= 18 && hasPermission && isAuthenticated && userName) {
	console.log(`User, ${userName} can have access to the website`);
}

console.log("----------while block----------");
/* 
while (condition) {
	// loop body
}
*/

let idx = 0;
while (idx < 3) {
	console.log(idx); // 0 1 2
	idx++;
}

console.log("----");

let i = 3;
while (i) {
	console.log(i); // 3 2 1
	i--;
}

console.log("----------do...while block----------");
/*  
do {
	// loop body
} while (condition)
*/

const num = 0;

do {
	console.log(num); // 0
} while (num);

console.log("----");

let index = 0;
do {
	console.log(index); // 0 1 2
	index++;
} while (index < 3);

console.log("----------for block----------");
/* 
for (initialization; condition; step) {
	loop body
}

initialization
for (; condition;) {
	statements
	step
}
*/

for (let i = 0; i < 3; i++) {
	console.log(i); // 0 1 2
}

// let idxValue = 0;
// for (; idxValue < 3; ) {
// 	idxValue++;
// 	console.log(idxValue); // 0 1 2
// }

console.log("----");

// WET principle
let indexValue = 3;
if (indexValue > 0) {
	console.log(indexValue); // 3
	indexValue--;
}

if (indexValue > 0) {
	console.log(indexValue); // 2
	indexValue--;
}

if (indexValue > 0) {
	console.log(indexValue); // 1
	indexValue--;
}

// break, label and continue
// break directive and labeled break

multiplicationTable: for (let multiplier = 1; multiplier <= 10; multiplier++) {
	for (let multiplicand = 1; multiplicand <= 12; multiplicand++) {
		console.log(
			`${multiplier} * ${multiplicand} = ${multiplier * multiplicand}`,
		);
		if (multiplier === 5 && multiplicand === 5) {
			break multiplicationTable;
		}
	}
}

for (let number = 2; number <= 10; number++) {
	let isPrime = true;
	for (let divisor = 2; divisor < number; divisor++) {
		if (number % divisor === 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log(`${number} is a prime number`);
	}
}

// continue directive

for (let number = 1; number <= 15; number++) {
	if (number % 2 === 0) {
		console.log(`Number is even = ${number}`);
	} else {
		console.log(`Number is odd = ${number}`);
	}
}

for (let number = 1; number <= 15; number++) {
	if (number % 2 === 0) continue;
	else console.log(number);
}

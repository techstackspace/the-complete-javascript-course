// Blocks
/*
1. standalone block
2. if block
3. else block
4. else if block
5. for block
6. while block
7. do...while block
8. switch block
9. try block
10. finally block
11. catch block
12. function body block
13. arrow function block body
14. static initialization block
*/

// Scopes
/* 
1. Global Scope
2. Block Scope
3. Function Scope
4. Module Scope
5. Class Scope
*/

/* 
1. When a block has one statement, you can write it all in one statement without braces, 
or simply omit the braces and keep the statement at its initial line.
2. Any statement after the return statement won't be reached
*/

function _demonstrateScopeAndBlocks() {
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
	// 	console.log(idxValue); // 0 1 2
	// 	idxValue++;
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

	// break directive and labeled break
	multiplicationTable: for (
		let multiplier = 1;
		multiplier <= 10;
		multiplier++
	) {
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

	// continue directive and labeled continue
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

	nextPrime: for (let number = 2; number <= 10; number++) {
		for (let divisor = 2; divisor < number; divisor++) {
			if (number % divisor === 0) {
				continue nextPrime;
			}
		}
		console.log(`${number} is a prime number`);
	}

	// let sum = 0;
	// while (true) {
	// 	const number = +prompt("Enter a number: ");
	// 	// 3, 4, 3
	// 	// sum = 0 + 3, sum = 3 + 4, sum = 7 + 3
	// 	sum += number;
	// 	if (number === 0) {
	// 		break;
	// 	}
	// }

	// let sum = 0;
	// for (;;) {
	// 	const number = +prompt("Enter a number: ");
	// 	sum += number;
	// 	if (number === 0) {
	// 		break;
	// 	}
	// }

	// console.log(sum)
	// alert(sum);

	// let password = "";
	// while (password !== "secret") {
	// 	password = prompt("Enter password: ");
	// }

	// alert(`${password} is correct!`);

	// let sum = 0;
	// for (let i = 0; i < 3; i++) {
	// 	const number = +prompt("Enter a number: ");
	// 	sum += number;
	// 	if (number === 0) {
	// 		break;
	// 	}
	// }

	// alert(sum);

	console.log("----------function body block----------");
	// 1. Function declaration

	/* 
- without parameter(s)
function functionName() {
	// body
}

functionName()
*/

	function addNumbers() {
		const num1 = 4;
		const num2 = 5;
		console.log(num1 + num2);
	}

	const result = addNumbers();
	console.log(result); // displays 9 and returns undefined

	/* 
- with parameter(s)
function functionName(param1, param2, ...) {
	// body
}

functionName(arg1, arg2, ...)
*/

	/* 
- Default values
*/
	function addTwoNumbers(num1 = 5, num2) {
		console.log(typeof num1, typeof num2);
		console.log(num1 + num2); // 30
	}

	const sum = addTwoNumbers(10, 20);
	console.log(sum);
	console.log(addTwoNumbers(4, 1));
	console.log(addTwoNumbers(1, 1));

	const add = addTwoNumbers(1, 1) + 3;
	console.log(add);

	/* 
- Return a value
*/

	function calculateSum(num1, num2) {
		return num1 + num2;
	}

	const calcSum = calculateSum(2, 1);
	console.log(calcSum + 2); // 3 + 2 = 5

	function isUserEligibleToVote(age, citizenshipYear) {
		return age > 18 && citizenshipYear > 5;
	}

	console.log(isUserEligibleToVote(20, 7));
	console.log(isUserEligibleToVote(10, 7));

	// Variable shadowing in function
	const num1 = 10;
	function getUserId(num1) {
		return `User id is ${num1}`;
	}
	console.log(num1); // 10

	const id = getUserId(5);
	console.log(id); // User id is 5

	// Scope chaining in function
	const globalVar = "Global";

	function outerFunction() {
		const outerVar = "Outer";

		function innerFunction() {
			const innerVar = "Inner";

			console.log(innerVar); // Inner
			console.log(outerVar); // Outer
			console.log(globalVar); // Global
		}
		innerFunction();
	}

	outerFunction();

	/* 
- Returns nothing (undefined)
*/

	function sumTwoNumbers(num1 = 5, num2 = 4) {
		console.log(typeof num1, typeof num2);
		console.log(num1 + num2);
		return;
	}

	const sumNumbers = sumTwoNumbers(10, 20);
	console.log(sumNumbers);

	function getSum() {
		const num1 = 4;
		const num2 = 5;
		console.log(num1 + num2);
		return undefined;
	}

	const number = getSum();
	console.log(number);

	// Guard clause pattern
	function getPersonAge(person) {
		// check if the person exists and has an age property
		let personAge;
		if (!person || typeof person.age !== "number") {
			personAge = null;
		} else {
			personAge = person.age;
		}
		return personAge;
		// console.log("hello");
	}

	const alice = {
		name: "Alice",
		age: 30,
	};

	console.log(getPersonAge(alice)); // 30
	console.log(getPersonAge({})); // null
	console.log(getPersonAge(4)); // null

	/* 
console.log(!!{}); // true
console(typeof typeof 42) // string
typeof 42 // "number"
 */

	/* 
2. 
Function Expression (Named)
- without parameter(s)
variable = function functionName() {
	// body
}
variable()	

Function Expression (Anonymous)
variable = function() {
	// body
}
variable()

- with parameter(s)
variable = function functionName(param1, param2, ...) {
	// body
}
variable(arg1, arg2, ...)	

Function Expression (Anonymous)
variable = function(param1, param2, ...) {
	// body
}
variable(arg1, arg2, ...)
*/

	const getTotalNumber = function calculateSumNumbers(num1, num2) {
		return num1 + num2;
	};
	console.log(getTotalNumber(2, 5));

	// const getSumNumber = function (num1, num2) {
	// 	return num1 + num2;
	// };
	// console.log(getSumNumber(2, 5));

	/* 
3. Arrow Function
- without parameter(s)
variable = () => {
	// body
}
variable()	

variable = () => statement
variable()

- with parameter(s)
variable = (param1, param2, ...) => {
	// body
}
variable(arg1, arg2, ...)	

variable = (param1, param2, ...) => statement
variable(arg1, arg2, ...)
*/

	const multiply = (num1, num2) => {
		return num1 * num2;
	};

	console.log(multiply(3, 4)); // 12

	const multiply_ = (num1, num2) => num1 * num2;

	console.log(multiply_(3, 4)); // 12
}

// 1. Assign a function to a variable
const age = 18;
let message;

if (age < 18) {
	message = () => "person is a teenager";
} else if (age >= 18 && age < 40) {
	message = () => "person is an adult";
} else {
	message = () => "person is elderly";
}

console.log(message);
console.log(message());

// Higher Order Function (execute and operation)
// 2. Pass a function as an argument
// - callback
const multiply = (num1, num2) => {
	return num1 * num2;
};

const execute = (callback) => {
	return callback(2, 5); // 10
};
console.log(execute(multiply));

const add = (num1, num2) => {
	return num1 + num2;
};

const operation = () => {
	return add;
};

console.log(operation()(2, 4)); // 6

// 3. Store function in array

const functions = [() => "Hello", () => "Hi"];

console.log(functions[1]()); // Hi

// 4. Store function in objects
const user = {
	greet() {
		return "Hello Bob";
	},
};

const user_ = {
	greet: () => {
		return "Hello Bob";
	},
};

console.log(user.greet()); // Hello Bob
console.log(user_.greet()); // Hello Bob

// Functions are first class objects (values)
user_.age = 24;
user_.personName = "Jack";
console.log(user_); // { greet: [Function: greet], age: 24, personName: 'Jack' }
console.log(user_.age); // 24
console.log(user_.personName); // Jack

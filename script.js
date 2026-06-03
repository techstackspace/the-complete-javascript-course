// conditional Branching
// 1. if statement
// 2. if...else statement
// 3. if...else if...else statement
// 4. ternary statement
// 5. switch statement
// 6. nested if statement

// 1. if statement (clause) - if () {...}
// Syntax
/* 
{} - block
falsy values - 0, -0, 0n, "", undefined, false, NaN, null
if (condition) {
	statement(s) executed when the condition is true
}
*/

/* if (undefined) {
	console.log("0 is falsy");
	console.log("This won't run");
}
 */
console.log("----------if statement----------");
const ageJohn = "34";
const isElder = ageJohn > 20;
if (isElder) {
	console.log("John is mark's elder brother");
	console.log("Code will be executed");
}

const ageSarah = 8;
if (ageSarah > 18) {
	console.log("Sarah has a driving licence");
}

console.log("----------else statement----------");
// 2. else statement (clause) - else {...}
// if...else
/* 
if (condition) {
	statement(s) executed when the condition is true
} else {
	statement(s) executed when the condition is false
}
 */
if (ageSarah > 18) {
	console.log("Sarah has a driving licence");
} else {
	console.log("Sarah is still a teenager");
}

console.log("----------else if statement----------");
// 3. else if statement (clause) - else if () {...}
// else if ...
/*
if (condition1) {
	statement(s) executed when the condition1 is true
} else if (condition2) {
	statement(s) executed when the condition2 is true
}
  ...
} else {
	statement(s) executed when none of the conditions are true
}
 */
const workHour = 15;

if (workHour <= 9) {
	console.log("Work hasn't started yet");
} else if (workHour >= 12) {
	console.log("Work is most likely started");
} else {
	console.log("It is public holiday");
}

const myAge = 34;
if (myAge < 18) {
	console.log("I am a teenager");
} else if (myAge > 18 && myAge <= 30) {
	console.log("He might be his elder brother");
} else {
	console.log("He is the eldest son of Sarah");
}

const currentYear = 2080;
if (currentYear < 2050) {
	console.log("We are in the Quantum AI Era");
} else if (currentYear === 2080) {
	console.log("We are beyound the Quantum AI Era");
} else if (currentYear >= 2080) {
	console.log("We now have robots working for us");
} else {
	console.log("We are in the Generative AI Era");
}

// 4. Ternary Statement
// Ternary Operator (Conditional or question mark operator)
console.log("----------Ternary statement----------");
/* 
condition ? expression1 : expression2
*/

const ageMichael = 18;
const ageBello = 24;

const isYounger =
	ageMichael < ageBello
		? "Michael is younger than Bello"
		: "Bello is younger than Michael";

console.log(isYounger);

// const ageJohn = "34";
// const isElder = ageJohn > 20;
if (isElder) {
	console.log("John is mark's elder brother");
	console.log("Code will be executed");
}

// isElder
// 	? (console.log("John is mark's elder brother"),
// 		console.log("Code will be executed"))
// 	: console.log("Condition is false.");

isElder
	? console.log("John is mark's elder brother")
	: console.log("Condition is false.");

// const ageSarah = 8;
// if (ageSarah > 18) {
// 	console.log("Sarah has a driving license");
// } else {
// 	console.log("Sarah is still a teenager");
// }
ageSarah > 18
	? console.log("Sarah has a driving licence")
	: console.log("Sarah is still a teenager");

// const workHour = 15;

/* condition1 ? expression1 :
condition2 ? expression2 :
condition3 ? expression3 :
...
expression(n) */

// if (workHour <= 9) {
// 	console.log("Work hasn't started yet");
// } else if (workHour >= 12) {
// 	console.log("Work is most likely started");
// } else {
// 	console.log("It is public holiday");
// }

workHour <= 9
	? console.log("Work hasn't started yet")
	: workHour >= 12
		? console.log("Work is most likely started")
		: console.log("It is public holiday");

// const currentYear = 2080;
// if (currentYear < 2050) {
// 	console.log("We are in the Quantum AI Era");
// } else if (currentYear === 2080) {
// 	console.log("We are beyound the Quantum AI Era");
// } else if (currentYear >= 2080) {
// 	console.log("We now have robots working for us");
// } else {
// 	console.log("We are in the Generative AI Era");
// }

currentYear < 2050
	? console.log("We are in the Quantum AI Era")
	: currentYear === 2080
		? console.log("We are beyound the Quantum AI Era")
		: currentYear >= 2080
			? console.log("We now have robots working for us")
			: console.log("We are in the Generative AI Era");

const isOlder =
	ageSarah > 18 ? "Sarah has a driving licence" : "Sarah is still a teenager";

console.log(isOlder);

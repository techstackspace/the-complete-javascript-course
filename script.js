// Block Scope
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
14. class body block
15. static initialization block
16. module scope block
*/
console.log("----------Block Scope----------");
// {...}
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

console.log("----------if statement----------");
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

console.log("----------else statement----------");
// 2. else statement (clause) - else {...}
// if...else
// Syntax
/* 
if (condition) {
	statement(s) executed when the condition is true
} else {
	statement(s) executed when the condition is false
}
 */

let message;
if (ageSarah > 18) {
	message = "Sarah has a driving licence";
} else {
	message = "Sarah is still a teenager";
}

console.log(message);

console.log("----------else if statement----------");
// 3. else if statement (clause) - else if () {...}
// else if ...
// Syntax
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

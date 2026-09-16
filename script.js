// Blocks (let / const)
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
12. static initialization block
*/

// Scopes
/* 
1. Global Scope
2. Block Scope
3. Function Scope
4. Module Scope
5. Class Scope
*/

var globalVar = "I am global";
// let globalLet = "I am also global";
const globalConst = "Me too";

function showGlobal() {
	console.log(globalVar);
	// console.log(globalLet);
	console.log(globalConst);
}

showGlobal();

// function myFunction() {
// 	var functionVar = "I am function-scoped";
// 	console.log(functionVar);
// }

// myFunction();
// console.log(functionVar);

// {
// 	let blockLet = "I am block-scoped";
// 	const blockConst = "Me too";
// 	var blockVar = "I am function-scoped (var ignores blocks)";
// }

// console.log(blockLet);
// console.log(blockConst);
console.log(blockVar);

function outer() {
	var outerVar = "Hello";

	function inner() {
		console.log(outerVar);
	}

	return inner;
}
var innerFunc = outer();
innerFunc();

// console.log(self);

const self = {};
console.log(self);

const name = "Jack";
console.log(name);

console.log(globalThis);

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
3. Module Scope
4. Function Scope
5. Class Scope
*/

/* 
1. When a block has one statement, you can write it all in one statement without braces, 
or simply omit the braces and keep the statement at its initial line.
2. Any statement after the return statement won't be reached
*/

/* 
Scope chain:
inner (current) scope -> outer scope -> ... -> global scope -> null (end)

Lexical Environment (2 parts)
1. EnvironmentRecord - stores bindings (variables, parameters, functions)
2. OuterEnvironmentReference - points to the next outer lexical environment
*/

/* 
Lexical Environment rules
1. Functions remember the lexical environment where they are defined (closure)
2. Blocks remember their enclosing lexical environment
3. Name lookup walks the scope chain from inner scope outward to the global scope
*/

/* 
GlobalExecutionContext ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment: GlobalLexicalEnvironment,
	VariableEnvironment: GlobalLexicalEnvironment,
}

GlobalObject (window/global) ≈ {
	globalThis: window,
	console: ...,
	Math: ...,
	document: ...,
	JSON: ...,
	Date: ...,
	Array: ...,
	Object: ...,
	Promise: ...,
	setTimeout: ...,
	...
}

GlobalExecutionContext (creation-phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment: {
		ObjectEnvironment: GlobalObject,
		DeclarativeEnvironment: {
			personName: <uninitialized>, // TDZ
			showMessage: <uninitialized>,  // TDZ
			username: <uninitialized>,  // TDZ
			ageMessage: <uninitialized>,  // TDZ
			myAge: <uninitialized>,  // TDZ
			getAgeMessage: <function>,
			_globalThis: <uninitialized>,  // TDZ
			person: <uninitialized>,  // TDZ
			user: <uninitialized>,  // TDZ
		},
		OuterEnvironmentReference: null
	},
	VariableEnvironment: same as LexicalEnvironment
}
	
GlobalExecutionContext (execution-phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment: GlobalObject,
		DeclarativeEnvironment: {
			personName: "Bob",
			showMessage: <function>, 
			username: "Osagie", 
			ageMessage: "He might be the eldest son of Sarah", 
			myAge: 34, 
			getAgeMessage: <function>,
			_globalThis: <function>, 
			person: { name: "Osagie" }, 
			user: { name: "Jerry", age: 23, greet: <function> }, 
		},
		OuterEnvironmentReference: null
	},
	VariableEnvironment: same as LexicalEnvironment
}
*/

function fnDeclaration() {
	/*
	Plain function call

	• Function declarations create their own `this` binding.
	• Without strict mode, `this` defaults to globalThis.
	• With strict mode, `this` is undefined.
	*/
	console.log(this, "fnDeclaration");
}

const fnExp = function () {
	/*
	Plain function call

	• Function expressions create their own `this` binding.
	• Without strict mode, `this` defaults to globalThis.
	• With strict mode, `this` is undefined.
	*/
	console.log(this, "fnExp");
};

// Defined in the Global Execution Context
const arrowFn = () => {
	/*
	Arrow function

	• Arrow functions do not create their own `this` binding.
	• They lexically inherit `this` from their surrounding scope.
	• Here, the surrounding scope is the Global Execution Context,
	  so `this === globalThis`.
	*/
	console.log(this, "arrowFn");
};

function fnDeclaration1() {
	/*
	Function declaration with .call()

	• Creates its own `this` binding.
	• .call(personInfo) explicitly sets `this` to personInfo.
	*/
	console.log(this, "fnDeclaration1");
	console.log(this.name, this.age);
}

const fnExp1 = function () {
	/*
	Function expression with .call()

	• Creates its own `this` binding.
	• .call(personInfo) explicitly sets `this` to personInfo.
	*/
	console.log(this, "fnExp1");
	console.log(this.name, this.age);
};

const arrowFn1 = () => {
	/*
	Arrow function with .call()

	• Arrow functions ignore .call(), .apply(), and .bind().
	• They always inherit `this` from their surrounding scope.
	• Since this arrow function was defined in the Global
	  Execution Context, `this === globalThis`.
	*/
	console.log(this, "arrowFn1");
};

const fnExp2 = function () {
	/*
	Function expression

	• Creates its own `this` binding.
	• .call(personInfo1) sets `this` to personInfo1.
	*/

	const arrowFn2 = () => {
		/*
		Nested arrow function

		• Does not create its own `this` binding.
		• Lexically inherits `this` from fnExp2.
		• Since fnExp2's `this` is personInfo1,
		  arrowFn2's `this` is also personInfo1.
		*/
		console.log(this, "arrowFn2");
	};

	arrowFn2();
};
const personInfo = { name: "Jerry", age: 34 };
fnExp();
fnDeclaration();
arrowFn();
arrowFn1();

fnExp1.call(personInfo);
fnDeclaration1.call(personInfo);
fnExp2.call(personInfo);

/*
Rules for `this`

1. Function declarations and function expressions create their own
   `this` binding.

2. Arrow functions never create their own `this` binding.
   They lexically inherit `this` from the surrounding execution context.

3. `call()`, `apply()`, and `bind()` can change `this` only for
   non-arrow functions.

4. `call()`, `apply()`, and `bind()` have no effect on an arrow
   function's `this`.
*/

/* 
In each function call:
Replaced FunctionLexicalEnvironment with LexicalEnvironment in each FunctionExecutionContext

FunctionLexicalEnvironment (New LexicalEnvironment) ≈ {
	EnvironmentRecord: { ... },
	OuterEnvironmentReference: ...
}

VariableEnvironment:
	Usually the same as FunctionLexicalEnvironment.
	Included only for completeness and legacy compatibility.
*/

const personName = "Bob";
const showMessage = (day) => {
	const personName = "Henry";
	return `Hello ${personName}, today is ${day}`; // "Hello Henry, today is Thursday"
};
console.log(personName); // "Bob"

/* 
When showMessage (and personName) is defined:

showMessage ≈ {
	[[Environment]]: GlobalLexicalEnvironment,
}
showMessage.[[Environment]] -> GlobalLexicalEnvironment
*/
// console.log(Math);
console.dir(showMessage);

/* 
During a call to showMessage("Thursday"):

- The function call (FunctionExecutionContext) is pushed onto the call stack
- A new lexical environment is created for this call

FunctionExecutionContext ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment: {
		EnvironmentRecord: {
			day: "Thursday",
			personName: "Henry"
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	},
	VariableEnvironment: same as LexicalEnvironment
}

┌──────────────────────────────┐
│ showMessage("Thursday")      │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘
*/
console.log(showMessage("Thursday"));

/* 
After the call to showMessage:

- The function call is popped off the call stack

┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘

- Garbage Collection Eligibility:
	GlobalLexicalEnvironment: Not Eligible,
	FunctionLexicalEnvironment: Eligible

"The Function Lexical Environment becomes unreachable
unless something still references it (such as a closure)."
*/

const username = "Osagie";

if (username === "Osagie") {
	console.log(`Welcome ${username}, you may have your licence`);
}

/* 

IfBlockLexicalEnvironment ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

If block finishes:

Garbage Collection Eligibility:
	IfBlockLexicalEnvironment: Eligible
*/

let ageMessage;
const myAge = 34;

if (myAge < 18) {
	ageMessage = "I am a teenager";
} else if (myAge > 18 && myAge <= 30) {
	ageMessage = "He might be his elder brother";
} else {
	ageMessage = "He might be the eldest son of Sarah";
}

console.log(ageMessage);

/* 
At this point: 

Each branch has its own block lexical environment:

IfBlockLexicalEnvironment ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
ElseIfBlockLexicalEnvironment ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
ElseBlockLexicalEnvironment ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

The if...else statement finishes:

Garbage Collection Eligibility: 
	IfBlockLexicalEnvironment: Eligible
	ElseIfBlockLexicalEnvironment: Eligible
	ElseBlockLexicalEnvironment: Eligible
*/
// getAgeMessage()
function getAgeMessage() {
	let ageMessage;
	const myAge = 34;

	if (myAge < 18) {
		ageMessage = "I am a teenager";
	} else if (myAge > 18 && myAge <= 30) {
		ageMessage = "He might be his elder brother";
	} else {
		ageMessage = "He might be the eldest son of Sarah";
	}
	// console.log(this);
	// this === globalThis (window)

	return ageMessage;
}

/* 
When getAgeMessage is created:

getAgeMessage ≈ {
	[[Environment]]: GlobalLexicalEnvironment,
}
getAgeMessage.[[Environment]] -> GlobalLexicalEnvironment
*/

console.dir(getAgeMessage);

/* 
During a call to getAgeMessage():

- The function call (FunctionExecutionContext) is pushed onto the call stack

┌──────────────────────────────┐
│ getAgeMessage()              │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘
- A new lexical environment is created for this call

- VariableEnvironment ≈ LexicalEnvironment
FunctionExecutionContext ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment: {
		EnvironmentRecord: {
			ageMessage: "He might be the eldest son of Sarah",
			myAge: 34
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	},
	VariableEnvironment: same as LexicalEnvironment
}
*/
console.log(getAgeMessage());

/* 
After the call to getAgeMessage:

- The function call (FunctionExecutionContext) is popped off the call stack

┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘
- Garbage Collection Eligibility:
	GlobalLexicalEnvironment: Not Eligible,
	FunctionLexicalEnvironment: Eligible

"The Function Lexical Environment becomes unreachable
unless something still references it (such as a closure)."
*/

const _globalThis = function () {
	const _getThisBinding = () => {
		console.log(this.name);
	};

	_getThisBinding();
};
const person = { name: "Osagie" };

/* 
When _globalThis is created:

_globalThis ≈ {
	[[Environment]]: GlobalLexicalEnvironment,
}
_globalThis.[[Environment]] -> GlobalLexicalEnvironment

- Arrow functions don't have their own this.
- They capture the this value from the surrounding function.

this -> person (lexically captured from _globalThis's ThisBinding)
*/

console.dir(_globalThis);

/* 
During a call to _globalThis():

- The function call (FunctionExecutionContext) is pushed onto the call stack
- _globalThis() pushed onto the call stack

┌──────────────────────────────┐
│ _globalThis()                │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

- VariableEnvironment ≈ LexicalEnvironment
FunctionExecutionContext ≈ {
	ThisBinding: person,
	LexicalEnvironment: {
		EnvironmentRecord: {
			_getThisBinding: <function>,
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	},
	VariableEnvironment: same as LexicalEnvironment
}
 
- _getThisBinding() pushed onto the call stack
┌──────────────────────────────┐
│ _getThisBinding()            │
├──────────────────────────────┤
│ _globalThis()                │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

- VariableEnvironment ≈ LexicalEnvironment
FunctionExecutionContext (_getThisBinding) ≈ {
    // No own ThisBinding (arrow function)
	LexicalEnvironment: {
		EnvironmentRecord: {},

		OuterEnvironmentReference:
			_globalThisLexicalEnvironment,
	},
	VariableEnvironment: same as LexicalEnvironment
}
- A new lexical environment is created for for this call
*/
_globalThis.call(person);

/* 
After the call to _globalThis (LIFO):

- The function call (FunctionExecutionContext) is popped off the call stack
- _getThisBinding() popped off:

┌──────────────────────────────┐
│ _globalThis()                │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

- _globalThis() popped off:

┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘

- Garbage Collection Eligibility:
	GlobalLexicalEnvironment: Not Eligible,
	FunctionLexicalEnvironment: Eligible

"The Function Lexical Environment becomes unreachable
unless something still references it (such as a closure)."
*/

const user = {
	name: "Jerry",
	age: 23,
	greet() {
		return `Hello ${this.name}`;
	},
};
console.log(user.greet());
// this -> user

/* 
After execution finishes, the call stack is empty
┌──────────────────────────────┐
│            empty             │
└──────────────────────────────┘

Execution has finished.

- Global Execution Context is removed (popped off).
- The Call Stack becomes empty.
- Any unreachable lexical environments become eligible for garbage collection.
*/

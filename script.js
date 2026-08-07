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

/* 
Scope chaining
innermost scope -> outer scope -> ... -> global scope -> null (stop)

Lexical Environment (2 parts)
1. EnvironmentRecord - stores variables, parameters, and functions
2. OuterEnvironmentReference - links to the parent scope

Lexical Environment rules
1. Function remember where they are defined
2. Block remember their enclosing scope chain
3. Name lookup goes from the inner scope outward to the global scope
*/

const personName = "Bob";
const showMessage = (day) => {
	return `Hello ${personName}, today is ${day}`;
};

/* 
When the function, showMessage() is created
GlobalLexicalEnvironment = creation-time lexical environment
GlobalLexicalEnvironment = {
	EnvironmentRecord: {
		personName: "Bob",
		showMessage: <function>
	},
	OuterEnvironmentReference: null,
}

showMessage = {
	[[Environment]]: GlobalLexicalEnvironment
}
or
showMessage.[[Environment]] -> GlobalLexicalEnvironment
*/

console.dir(showMessage);

/* 
During the function, showMessage() call
- Function call, showMessage() is pushed onto the call-stack
- FunctionLexicalEnvironment = call-time lexical environment
FunctionLexicalEnvironment = {
	EnvironmentRecord: {
		day: "Thursday"
	},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/
console.log(showMessage("Thursday"));

/* 
After the function, showMessage() is called
- Function call, showMessage() is popped off from the call-stack
- Check for garbage collection?
*/

const showMessage_ = (day) => {
	const personName = "Bob";
	return `Hello ${personName}, today is ${day}`;
};

/* 
When the function, showMessage_() is created
GlobalLexicalEnvironment = {
	EnvironmentRecord: {
		showMessage_: <function>
	},
	OuterEnvironmentReference: null,
}

showMessage_ = {
	[[Environment]]: GlobalLexicalEnvironment
}
*/
console.dir(showMessage_);
/* 
During the function, showMessage_() call
- Function call, showMessage_() is pushed onto the call-stack
- FunctionLexicalEnvironment = call-time lexical environment
FunctionLexicalEnvironment = {
	EnvironmentRecord: {
		day: "Thursday",
		personName: "Bob"
	},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/
console.log(showMessage_("Friday"));

/* 
After the function, showMessage_() is called
- Function call, showMessage_() is popped off from the call-stack
- Check for garbage collection?
*/

const username = "Osagie";
if (username === "Osagie") {
	console.log(`Welcome ${username}`);
}

/* 
GlobalLexicalEnvironment = {
	EnvironmentRecord: {
		username: "Osagie"
	},
	OuterEnvironmentReference: null,
}

IfBlockLexicalEnvironment = {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/

/* 
When the if statement finishes
- Check for garbage collection?
*/

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

/* 
GlobalLexicalEnvironment = {
	EnvironmentRecord: {
		ageMessage: undefined,
		myAge: 34
	},
	OuterEnvironmentReference: null,
}

- Each branch has its own block lexical environment, not one shared environment.

IfBlockLexicalEnvironment = {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

ElseIfBlockLexicalEnvironment = {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

ElseBlockLexicalEnvironment = {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/

/* 
When if...else statement finishes
- Check for garbage collection?
*/

function getAgeMessage() {
	let ageMessage;
	const myAge = 34;
	if (myAge < 18) {
		ageMessage = "I am a teenager";
	} else if (myAge > 18 && myAge <= 30) {
		ageMessage = "He might be his elder brother";
	} else {
		ageMessage = "He is the eldest son of Sarah";
	}
	return ageMessage;
}

/* 
When the function, showMessage_() is created
GlobalLexicalEnvironment = {
	EnvironmentRecord: {
		getAgeMessage: <function>
	},
	OuterEnvironmentReference: null,
}

getAgeMessage = {
	[[Environment]]: GlobalLexicalEnvironment
}
*/
console.dir(getAgeMessage);

/* 
During the function, getAgeMessage() call
- Function call, getAgeMessage() is pushed onto the call-stack
- FunctionLexicalEnvironment = call-time lexical environment
FunctionLexicalEnvironment = {
	EnvironmentRecord: {
		ageMessage: "He is the eldest son of Sarah",
		myAge: 34
	},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/
console.log(getAgeMessage());

/* 
After the function, getAgeMessage() is called
- Function call, getAgeMessage() is popped off from the call-stack
- Check for garbage collection?
*/

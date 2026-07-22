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

const personName = "Bob";
const showMessage = (day) => {
	const personName = "Henry";
	return `Hello ${personName}, today is ${day}`; // "Hello Henry, today is Thursday"
};
console.log(personName); // "Bob"

/* 
When showMessage (and personName) is defined:

GlobalLexicalEnvironment (creation-time) ≈ {
	EnvironmentRecord: {
		personName: "Bob"
		showMessage: <function>
	},
	OuterEnvironmentReference: null
}

showMessage ≈ {
	[[Environment]]: GlobalLexicalEnvironment,
}
showMessage.[[Environment]] -> GlobalLexicalEnvironment
*/

console.dir(showMessage);

/* 
During a call to showMessage("Thursday"):

- The function call is pushed onto the call stack
- A new lexical environment is created for for this call

FunctionExecutionContext (call-time) ≈ {
	FunctionLexicalEnvironment: {
		EnvironmentRecord: {
			day: "Thursday",
			personName: "Henry"
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	}
}
*/
console.log(showMessage("Thursday"));

/* 
After the call to showMessage:
- The function call is popped off the call stack
- Garbage Collection Eligibility:
	GlobalLexicalEnvironment: No,
	FunctionLexicalEnvironment: Yes
*/

const username = "Osagie";

if (username === "Osagie") {
	console.log(`Welcome ${username}, you may have your licence`);
}

/* 
GlobalLexicalEnvironment ≈ {
	EnvironmentRecord: {
		username: "Osagie"
	},
	OuterEnvironmentReference: null
}

IfBlockLexicalEnvironment ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

If block finishes:

Garbage Collection Eligibility:
	IfBlockLexicalEnvironment: Yes
*/

let ageMessage;
const myAge = 34;

if (myAge < 18) {
	ageMessage = "I am a teenager";
} else if (myAge > 18 && myAge <= 30) {
	ageMessage = "He might be his elder brother";
} else {
	ageMessage = "He might the eldest son of sarah";
}

console.log(ageMessage);

/* 
At this point: 

GlobalLexicalEnvironment ≈ {
	EnvironmentRecord: {
		ageMessage: undefined -> "He might the eldest son of sarah",
		myAge: 34
	},
	OuterEnvironmentReference: null
}

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

if...else statements finishes:

Garbage Collection Eligibility: 
	IfBlockLexicalEnvironment: Yes
	ElseIfBlockLexicalEnvironment: Yes
	ElseBlockLexicalEnvironment: Yes
*/

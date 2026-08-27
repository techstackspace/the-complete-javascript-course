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
Scope chain:
inner (current) scope -> outer scope -> ... -> global scope -> null (end)

Lexical Environment (2 conceptual parts)
1. EnvironmentRecord - Stores bindings (variables, functions, parameters, classes, etc)
2. OuterEnvironmentReference - A link to the outer lexical environment

Lexical Environment rules
1. Functions remember where they were created.

2. A function's [[Environment]] points to the lexical
   environment that was active when the function was created.

3. When a function is called, its Function Environment
   becomes the current/innermost environment.

4. The function environment's outer reference points to
   the environment stored in the function's [[Environment]].

5. Blocks with lexical declarations create lexical environments.

6. Name lookup starts from the current environment and moves
   outward through OuterEnvironmentReference.

7. Name lookup stops at the global environment.

8. If the binding cannot be found, lookup ultimately results
   in a ReferenceError.
*/

// console.log(personName); // ReferenceError
// console.log(showMessage); // ReferenceError

/* 
- Every function Execution Context for an ordinary function has a this binding
- Arrow function do not have their own this binding
*/

// Browser runtime
console.log(globalThis === window); // true

// Node / Bun / Nub runtime (Server-side)
// console.log(globalThis === global); // ReferenceError in the Browser

const personName = "Bob";
const showMessage = (day) => {
	return `Hello ${personName}, today is ${day}`;
};
console.dir(showMessage);
// console.log(myName); // undefined
var myName = "Jerry";
console.log(myName);
var name = "John";
console.log(name);

function getAgeMessage(day) {
	const year = 10;
	return `Today, ${day}, ${personName} is ${year}`;
}
console.dir(getAgeMessage); // Object
console.log(typeof getAgeMessage); // function (Object)

/* 
Creation phase (GEC)
- The Global Execution Context is created and pushed onto the call stack when JavaScript begins 
executing the global code.

Call Stack:
┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘

GlobalObject (window/global) ≈ {
	globalThis: <object>,
	console: <object>,
	Math: <object>,
	JSON: <object>,
	myName: undefined,
	name: undefined,
	getAgeMessage: <function object>
	...
}

- After JavaScript parses the source code, the Global Execution Context is created and pushed onto 
the call stack before the global code is executed.

Memory Heap: 
 0x1AF11B2: <function object>

Generally,
GlobalExecutionContext ≈ {
	LexicalEnvironment: EnvironmentRecord,
	VariableEnvironment: EnvironmentRecord,
	ThisBinding: globalThis ([[GlobalThisValue]]),
}

Or Simplified model

Normal Script
GlobalExecutionContext (creation phase) ≈ {
    ThisBinding: globalThis,
	LexicalEnvironment (Global Lexical Environment): {
		EnvironmentRecord (Global Environment Record): {
		    // let / const / class declarations
			DeclarativeRecord: {
				personName: <uninitialized>, // TDZ
				showMessage: <uninitialized>, // TDZ
			}
		},
		OuterEnvironmentReference: null,
	},
	VariableEnvironment (Global Variable Environment): {
		EnvironmentRecord (Global Environment Record): {
		    // var / function declarations
			ObjectRecord: {
				myName: undefined,
				name: undefined,
				getAgeMessage: <function object> (0x1AF11B2),
				[[BindingObject]]: GlobalObject (globalThis),
			}
		},
		OuterEnvironmentReference: null,
	},
	[[VarNames]]: [
		"myName",
		"name",
		"getAgeMessage",
	]
}

GlobalExecutionContext.ThisBinding === 
	GlobalExecutionContext.VariableEnvironment.EnvironmentRecord.ObjectRecord.[[BindingObject]]

[[Environment]] = Internal (hidden) environment reference
showMessage ≈ {
	[[Environment]]: LexicalEnvironment (Global Lexical Environment),
	[[ECMAScriptCode]]: (day) => {
		return `Hello ${personName}, today is ${day}`;
	},
	Parameters: ["day"]
}

getAgeMessage ≈ {
	[[Environment]]: LexicalEnvironment (Global Lexical Environment),
	[[ECMAScriptCode]]: (day) => {
		const year = 10;
		return `Today, ${day}, ${personName} is ${year}`;
	},
	Parameters: ["day"]
}
*/

/* 
Execution phase (GEC)
- All top-level variables are initialized with their values during the execution phase of the 
Global Execution Context (GEC)

GlobalObject (window/global) ≈ {
	globalThis: <object>,
	console: <object>,
	Math: <object>,
	JSON: <object>,
	myName: "Jerry",
	name: "John",
	getAgeMessage: <function object>
	...
}

Memory Heap: 
 0x1AF11B2: <function object>,
 0xA100B01: <arrow function object>

GlobalExecutionContext (execution phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment (Global Lexical Environment): {
		EnvironmentRecord: {
		    // let / const / class declarations
			DeclarativeRecord: {
				personName: "Bob",
				showMessage: <arrow function object> (0xA100B01),
			}
		},
		OuterEnvironmentReference: null,
	},
	VariableEnvironment (Global Variable Environment): {
		EnvironmentRecord: {
		    // var / function declarations
			ObjectRecord: {
				myName: "Jerry",
				name: "John",
				getAgeMessage: <function object> (0x1AF11B2),
				[[BindingObject]]: GlobalObject (globalThis),
			}
		},
		OuterEnvironmentReference: null,
	},
	[[VarNames]]: [
		"myName",
		"name",
		"getAgeMessage",
	]
}

[[Environment]] = Internal (hidden) environment reference
showMessage ≈ {
	[[Environment]]: LexicalEnvironment (Global Lexical Environment),
	[[ECMAScriptCode]]: (day) => {
		return `Hello ${personName}, today is ${day}`;
	},
	Parameters: ["day"]
}

getAgeMessage ≈ {
	[[Environment]]: LexicalEnvironment (Global Lexical Environment),
	[[ECMAScriptCode]]: (day) => {
		const year = 10;
		return `Today, ${day}, ${personName} is ${year}`;
	},
	Parameters: ["day"]
}
*/

console.log(showMessage("Thursday"));

/* 
A normal Function Environment Record does NOT have the Global Environment Record's:

	[[DeclarativeRecord]]
	[[ObjectRecord]]
	[[BindingObject]]
	[[GlobalThisValue]]
	[[VarNames]]

Those are part of the Global Environment Record.
*/

/* 
Execution phase (FEC)
showMessage.[[Environment]]: -> GlobalLexicalEnvironment
During the function, showMessage() call:
- A new Execution Context, Function Execution Context (FEC) is created
- FEC is pushed onto the call stack

Call Stack:
┌──────────────────────────────┐
│ showMessage("Thursday")      │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

FunctionExecutionContext (execution phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment (Function Lexical Environment): {
		EnvironmentRecord: {
		    // parameters / let / const / class declarations
			day: "Thursday"
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	},
	VariableEnvironment (Function Variable Environment): {
		EnvironmentRecord: {
		    // var / function declarations (no binding)
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	}
}

After the call to showMessage():
- FEC is popped off from the call stack

Call Stack:
┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘

*/

console.log(getAgeMessage("Monday"));
/* 
Execution phase (FEC)
getAgeMessage.[[Environment]]: -> GlobalLexicalEnvironment
During the function, getAgeMessage() call:
- A new Execution Context, Function Execution Context (FEC) is created

Setup / creation of the FEC:
FunctionExecutionContext (setup) ≈ {
	ThisBinding: globalThis,
    LexicalEnvironment: {
        EnvironmentRecord: {
            day: "Monday",
            year: <uninitialized> // TDZ
        },
        OuterEnvironmentReference: GlobalLexicalEnvironment
    },

    VariableEnvironment: {
        EnvironmentRecord: {
            // var / function declarations
        },
        OuterEnvironmentReference: GlobalLexicalEnvironment
    }
}

- FEC is pushed onto the call stack

Call Stack:
┌──────────────────────────────┐
│ getAgeMessage("Monday")      │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

FunctionExecutionContext (execution phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment (Function Lexical Environment): {
		EnvironmentRecord: {
		    // parameters / let / const / class declarations
			day: "Monday",
			year: 10,
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	},
	VariableEnvironment (Function Variable Environment): {
		EnvironmentRecord: {
		    // var / function declarations (no binding)
		},
		OuterEnvironmentReference: GlobalLexicalEnvironment,
	}
}

After the call to getAgeMessage():
- FEC is popped off from the call stack

Call Stack:
┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘
*/

/* 
After execution finishes, the call stack is empty

Call Stack:
┌──────────────────────────────┐
│            empty             │
└──────────────────────────────┘
*/

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
 0x1AF11B2: <getAgeMessage function object>

GlobalExecutionContext (creation phase) ≈ {
    ThisBinding: globalThis,
	LexicalEnvironment (Global Lexical Environment): {
		EnvironmentRecord: {
		    // let / const / class declarations
			personName: <uninitialized>, // TDZ
			showMessage: <uninitialized>, // TDZ
			createCounter: <uninitialized>, // TDZ
			username: <uninitialized>, // TDZ
			ageMessage: <uninitialized>, // TDZ
			myAge: <uninitialized>, // TDZ
			counter: <uninitialized>,
		},
		OuterEnvironmentReference: null,
	},
	VariableEnvironment (Global Variable Environment): {
		EnvironmentRecord: {
		    // var / function declarations
			myName: undefined,
			name: undefined,
			getAgeMessage: <function object> (0x1AF11B2),
		},
		OuterEnvironmentReference: null,
	}
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

createCounter ≈ {
	[[Environment]]: LexicalEnvironment (Global Lexical Environment),
	[[ECMAScriptCode]]: () => {
      let count = 0;

      const counter = () => {
         count++; 
         return count;
      };

      return counter;
   },
	Parameters: []
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
 0x1AF11B2: <getAgeMessage function object>,
 0xA100B01: <showMessage arrow function object>,
 0x1000B21: <createCounter arrow function object>,
 0x20AB101: <counter arrow function object>,
 0x210314B: <GlobalObject>,
 0x20014FA: <global counter arrow function object>,

GlobalExecutionContext (execution phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment (Global Lexical Environment): {
		EnvironmentRecord: {
		    // let / const / class declarations
			personName: "Bob",
			showMessage: <showMessage arrow function object> (0xA100B01),
			createCounter: <createCounter arrow function object>, (0x1000B21)
			username: "Osagie",
			ageMessage: undefined -> "He might be the eldest son of Sarah",
			myAge: 34,myAge: 34,
			counter: <global counter arrow function object> (0x20014FA)
		},
		OuterEnvironmentReference: null,
	},
	VariableEnvironment (Global Variable Environment): {
		EnvironmentRecord: {
		    // var / function declarations
			myName: "Jerry",
			name: "John",
			getAgeMessage: <getAgeMessage function object> (0x1AF11B2),
		},
		OuterEnvironmentReference: null,
	}
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

createCounter ≈ {
	[[Environment]]: LexicalEnvironment (Global Lexical Environment),
	[[ECMAScriptCode]]: () => {
      let count = 0;

      const counter = () => {
         count++; 
         return count;
      };

      return counter;
   },
	Parameters: []
}
*/

console.log(showMessage("Thursday"));
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

/* 
After the function call finishes (showMessage):

GC = Garbage Collection
showMessage arrow function object:
	- Not eligible for GC
showMessage FLE:
	day: "Thursday"
	- Eligible for GC
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
After the function call (getAgeMessage()) finishes:

getAgeMessage function object:
	- Not eligible for GC
getAgeMessage FLE:
	day: "Monday"
	year: 10
	- Eligible for GC
*/

const createCounter = () => {
	let count = 0;

	const counter = () => {
		count++; // count + 1
		return count;
	};

	return counter;
};

const counter = createCounter();
console.log(counter); // [Function: counter2]
console.dir(counter);

/* 
Execution phase (FEC)
createCounter.[[Environment]]: -> GlobalLexicalEnvironment
During the function, createCounter() call:
- A new Execution Context, Function Execution Context (FEC) is created

Setup / creation of the FEC:
FunctionExecutionContext (setup) ≈ {
	ThisBinding: globalThis,
    LexicalEnvironment: {
        EnvironmentRecord: {
            count: <uninitialized>, // TDZ
            counter: <uninitialized>, // TDZ
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

counter ≈ {
   [[Environment]]: CreateCounterLexicalEnvironment,
   [[ECMAScriptCode]]: () => {
		count++;
		return count;
	},
   Parameters: [],
}

- FEC is pushed onto the call stack

Call Stack:
┌──────────────────────────────┐
│ createCounter()              │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

FunctionExecutionContext (execution phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment (Function Lexical Environment): {
		EnvironmentRecord: {
		    // parameters / let / const / class declarations
			count: 0,
			counter: <counter arrow function> (0x20AB101),
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

counter.[[Environment]] -> CreateCounterLexicalEnvironment

After the call to createCounter():
- FEC is popped off from the call stack

Call Stack:
┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘
*/

console.log(counter());
console.log(counter());
console.log(counter());

/* 
After the function call (createCount()) finishes:
createCounter arrow function object:
	- Not eligible for GC
createCounter FLE:
	- Not eligible for GC
*/

/* 
After execution finishes, the call stack is empty

Call Stack:
┌──────────────────────────────┐
│            empty             │
└──────────────────────────────┘
*/

/* 
Function:
  Execution Context
  Lexical Environment
  Variable Environment

Block:
  Lexical Environment
*/

const username = "Osagie";

if (username === "Osagie") {
	console.log(`Welcome ${username}, you may have your licence`);
}

/* 
- Variables declared with let and const are blocked-scoped (not function-scoped)
Execution phase
IfBlockLexicalEnvironment ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/

/* 
After if block finishes: 

IfBlockLexicalEnvironment:
	- Eligible for GC 
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
Execution phase
- Each branch has its own block lexical environment:

IfBlockLexicalEnvironment  ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

ElseIfBlockLexicalEnvironment  ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

ElseBlockLexicalEnvironment  ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}

- Evaluated BlockLexicalEnvironment:

ElseBlockLexicalEnvironment  ≈ {
	EnvironmentRecord: {},
	OuterEnvironmentReference: GlobalLexicalEnvironment
}
*/

/* 
After if block finishes: 

IfBlockLexicalEnvironment:
	- Eligible for GC 
*/

function getMessage() {
	const message = "Hello";
	return message;
}

let result = getMessage();
result = "Goodbye";
console.log(result); // "Goodbye"

/* 
After if block finishes:

getMessage FLE:
    - Eligible for GC

message binding:
    - No longer reachable
*/

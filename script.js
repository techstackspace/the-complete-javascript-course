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
const name = "John";
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

Memory Heap ≈ {
    0x1AF11B2: <getAgeMessage function object>,
}

GlobalExecutionContext (creation phase) ≈ {
    ThisBinding: globalThis,
	LexicalEnvironment (Global Lexical Environment): {
		EnvironmentRecord: {
		    // let / const / class declarations
			personName: <uninitialized>, // TDZ
			showMessage: <uninitialized>, // TDZ
			getAgeMessage: <uninitialized>, // TDZ
			henryInfo: <uninitialized>, // TDZ
			getThisBinding: <uninitialized>, // TDZ
			callWithThis: <uninitialized>, // TDZ
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
 	0x1000: <showMessage arrow function object>,
    0x2000: <henryInfo object>,
    0x3000: <getThisBinding arrow function object>,
    0x4000: <callWithThis function object>

GlobalExecutionContext (execution phase) ≈ {
	ThisBinding: globalThis,
	LexicalEnvironment (Global Lexical Environment): {
		EnvironmentRecord: {
		    // let / const / class declarations
			personName: "Bob",
			showMessage: <showMessage arrow function object> (0x1000),
			getAgeMessage: <getAgeMessage function object> (0x1AF11B2),
			henryInfo: <henryInfo object> (0x2000),
			getThisBinding: <getThisBinding arrow function object> (0x3000),
			callWithThis: <callWithThis function object> (0x4000),
		},
		OuterEnvironmentReference: null,
	},
	VariableEnvironment (Global Variable Environment): {
		EnvironmentRecord: {
		    // var / function declarations
			myName: "Jerry",
			name: "John",
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

console.log(getAgeMessage("Monday"));
/* 
Execution phase (FEC)
getAgeMessage.[[Environment]]: -> GlobalLexicalEnvironment
During the function, getAgeMessage() call:
- A new Execution Context, Function Execution Context (FEC) is created

Setup / creation of the FEC:
FunctionExecutionContext (setup) ≈ {
	ThisBinding: globalThis,
    LexicalEnvironment (Function Lexical Environment): {
        EnvironmentRecord: {
            day: "Monday",
            year: <uninitialized> // TDZ
        },
        OuterEnvironmentReference: GlobalLexicalEnvironment
    },

    VariableEnvironment (Function Variable Environment): {
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

const callWithThis = function () {
	const getThisBinding = () => {
		console.log(this); // this === henryInfo
	};
	getThisBinding();
};
// callWithThis();
const henryInfo = { name: "Henry", age: 12 };
callWithThis.call(henryInfo);

/* 
Execution phase (FEC)
callWithThis.[[Environment]]: -> GlobalLexicalEnvironment

During the function, callWithThis.call(henryInfo):
- A new Execution Context, Function Execution Context (FEC) is created

Setup / creation of the FEC:
FunctionExecutionContext (setup) ≈ {
    ThisBinding: henryInfo (0x2000),

    LexicalEnvironment (Function Lexical Environment): {
        EnvironmentRecord: {
            // const / let / class declarations
            getThisBinding: <uninitialized>
        },
        OuterEnvironmentReference: GlobalLexicalEnvironment
    },

    VariableEnvironment (Function Variable Environment): {
        EnvironmentRecord: {
            // var / function declarations
        },
        OuterEnvironmentReference: GlobalLexicalEnvironment
    }
}

- FEC is pushed onto the call stack

Call Stack:

┌──────────────────────────────────┐
│ callWithThis.call(henryInfo)     │
│                                  │
│ Function Execution Context       │
├──────────────────────────────────┤
│ Global Execution Context         │
└──────────────────────────────────┘


FunctionExecutionContext (execution phase) ≈ {
    ThisBinding: henryInfo (0x2000),

    LexicalEnvironment (Function Lexical Environment): {
        EnvironmentRecord: {
            // parameters / let / const / class declarations

            getThisBinding:
                <getThisBinding arrow function object> (0x3000)
        },

        OuterEnvironmentReference: GlobalLexicalEnvironment
    },

    VariableEnvironment (Function Variable Environment): {
        EnvironmentRecord: {
            // var / function declarations (no binding)
        },

        OuterEnvironmentReference: GlobalLexicalEnvironment
    }
}


getThisBinding ≈ {
    [[Environment]]:
        FunctionLexicalEnvironment,

    [[ECMAScriptCode]]:
        () => {
            console.log(this);
        }
}


- getThisBinding() is now called.
- A new Execution Context is created for the arrow function.
- The arrow function does NOT receive its own ThisBinding.
- Its "this" is lexically inherited from the surrounding
  callWithThis Function Execution Context.

ArrowFunctionExecutionContext ≈ {
    ThisBinding:
        <no own ThisBinding>,

    LexicalEnvironment: {
        EnvironmentRecord: {
            // no parameters / let / const / class declarations
        },

        OuterEnvironmentReference:
            FunctionLexicalEnvironment
    }
}


- Arrow Function Execution Context is pushed onto the call stack.

Call Stack:

┌──────────────────────────────────┐
│ getThisBinding()                 │
│                                  │
│ Arrow Function Execution Context │
├──────────────────────────────────┤
│ callWithThis.call(henryInfo)     │
│                                  │
│ Function Execution Context       │
├──────────────────────────────────┤
│ Global Execution Context         │
└──────────────────────────────────┘


Inside getThisBinding():

console.log(this);


The arrow function does not have its own "this".

Therefore its "this" is lexically inherited from
the surrounding callWithThis Function Execution Context:

getThisBinding()
    ↓
Arrow Function Execution Context
    ↓
no own ThisBinding
    ↓
surrounding callWithThis Function Execution Context
    ↓
ThisBinding: henryInfo (0x2000)
    ↓
henryInfo
    ↓
{
    name: "Henry",
    age: 12
}


console.log(this);
// { name: "Henry", age: 12 }


- getThisBinding() finishes execution.
- Arrow Function Execution Context is popped off the call stack (LIFO).

Call Stack:

┌──────────────────────────────────┐
│ callWithThis.call(henryInfo)     │
│                                  │
│ Function Execution Context       │
├──────────────────────────────────┤
│ Global Execution Context         │
└──────────────────────────────────┘


- callWithThis() finishes execution.
- Function Execution Context is popped off the call stack.

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

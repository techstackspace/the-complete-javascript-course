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

/* 
Nested Function Calls
*/

function first() {
	second();
}

function second() {
	third();
}

function third() {
	console.log("Hello");
}

first();

/* 
Call stack:

┌──────────────────────────────┐
│ third()                      │
├──────────────────────────────┤
│ second()                     │
├──────────────────────────────┤
│ first()                      │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

When third() finishes:

┌──────────────────────────────┐
│ second()                     │
├──────────────────────────────┤
│ first()                      │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

Then:

┌──────────────────────────────┐
│ first()                      │
├──────────────────────────────┤
│ Global Execution Context     │
└──────────────────────────────┘

Finally:

┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘

The Call Stack follows LIFO:

Last In -> First Out

The order is:
push first
push second
push third

pop third
pop second
pop first

When global execution has finished:

┌──────────────────────────────┐
│            empty             │
└──────────────────────────────┘

The Global Execution Context is no longer the currently executing
context.
*/

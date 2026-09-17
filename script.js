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
function fn(para1, para2, ..., paraN) {
    console.log(this)
}

obj = {...}
fn.call(obj, arg1, arg2, ..., argN)

function fn(para1, para2, ..., paraN) {
    console.log(this)
}

obj = {...}
fn.apply(obj, [arg1, arg2, ..., argN])
*/

function greet(firstName, lastName) {
	return `My name is ${firstName} ${lastName}. I am ${this.age} years old on ${this.day}.`;
}

const person = { age: 34, day: "thursday" };
console.log(greet.call(person, "John", "Doe"));

function greet1(firstName, lastName) {
	return `My name is ${firstName} ${lastName}. I am ${this.age} years old on ${this.day}.`;
}

const person1 = { age: 23, day: "monday" };
console.log(greet1.call(person1, "Osagie", "Bello"));

/* 
greet ≈ {
    [[Environment]]: LexicalEnvironment (Global Lexical Environment),
    [[Prototype]]: Function.prototype,
    ...
}

Function.prototype ≈ {
    call: function,
    apply: function,
    bind: function,
    ...
}
*/

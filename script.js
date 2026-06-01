// Logical operators
// - OR (||)
// - AND (&&)
// - NOT (!)
// - Nullish Coalescing (??)

// Falsy values - false, 0, -0, 0n, null, undefined, "", NaN
// Truthy values - " ", 3, true, ...

// OR (||) operator
// - Short-circuit
console.log(0 || null || "Hello" || "Hi"); // Hello
console.log(0 || null || undefined); // undefined

// AND (&&) operator
// - Short-circuit
console.log("John" && " " && 45 && true && 0 && undefined && 1); // 0
console.log("John" && " " && 45 && true); // true

// NOT (!) operator
console.log(!true); // false
console.log(!!true); // true

console.log(!0); // true
console.log(!!0); // false

// Nullish Coalescing (??) operator
// - Short-circuit
console.log(null ?? undefined ?? "Samuel"); // Samuel
let name;
const personName = name ?? null ?? "John" ?? undefined;
console.log(personName); // John

console.log(undefined ?? null); // null

// Mixed Logical Expression
console.log(
	(null || undefined || 34 || (0 && "Hello")) ?? (undefined || "Hi") ?? "valid",
);
console.log(null || undefined || 34 || 0 || "Hi"); // 34
console.log(
	(null || undefined || 34 || (0 && "Hello")) ?? (undefined || "Hi") ?? "valid",
);

console.log(null || 34 || 0 || "Hi"); // 34

const x = 1;
const result = x >= 1 && `x is greater than or equal to ${x}`;
console.log(result);

console.log(null || !34 || 0 || "Hi"); // Hi

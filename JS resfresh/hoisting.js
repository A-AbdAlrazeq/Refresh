// Function hoisting
greet(); // ✅ Works fine

function greet() {
  console.log("Hello, Abd!");
}

// Variable hoisting with var
console.log(a); // ❌ Undefined (var is hoisted but not initialized)
var a = 10;
console.log(a); // ✅ 10

// Variable hoisting with let (Throws an error)
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20

console.log(a); // ❌ Throws undefined (CORRECT)
var a = 5;

foo(); // ✅ Prints: "Hello from foo!" (CORRECT)
function foo() {
  console.log("Hello from foo!");
}
bar(); // ❌ ERROR! TypeError: bar is not a function
var bar = function () {
  console.log("Hello from bar!");
};

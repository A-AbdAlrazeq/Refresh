// 1. Function Declaration (Hoisted)
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Abd Alrahman"));

// 2. Function Expression (Not Hoisted)
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

// 3. Arrow Function (Shorter Syntax)
const add = (a, b) => a + b;
console.log(add(3, 7));

const person = {
  name: "Abd Alrahman",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // ✅ "Hello, my name is Abd Alrahman"

const greetFunc = person.greet;
greetFunc(); // ❌ "Hello, my name is undefined" (or window/global object in non-strict mode)

// 4. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This runs immediately!");
})();

// 5. Scope (Global, Local, Block)
let globalVar = "I'm global";
function testScope() {
  let localVar = "I'm local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}
testScope();
// console.log(localVar); // ❌ Error: Not defined outside function

// 6. Hoisting (JS moves function declarations up)
console.log(hoistedFunc()); // ✅ Works because it's hoisted
function hoistedFunc() {
  return "Hoisting example!";
}

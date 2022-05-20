/*
CLOSURE_______________
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

// LEXICAL Scoping
function Name() {
  let name = "Faizan"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
// Name();

// We can also store the returned value of a function like below:

function myName() {
  let name = "Hassan"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    return name; // use variable declared in the parent function
  }
  return displayName();
}
// myName();

var MyName = myName();
console.log(MyName);

/*
ARROW FUNCTION_____________________
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

There are differences between arrow functions and traditional functions, as well as some limitations:

 - Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
 - Arrow functions don't have access to the new.target keyword.
 - Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
 - Arrow functions cannot be used as constructors.
 - Arrow functions cannot use yield, within its body.
*/

// Example

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// expected output: Array [8, 6, 7, 9]

// TRADITIONAL ANONYMOUS FUNCTION_____________________
// function (a) {
//   return a + 100;
// }

// ARROW FUNCTION_____________________
(a) => {
  return a + 100;
};

// OR
(a) => a + 100;

// OR
a => a + 100;

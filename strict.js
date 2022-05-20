/*
Strict mode makes several changes to normal JavaScript semantics:

 - Eliminates some JavaScript silent errors by changing them to throw errors.
 - Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be 
   made to run faster than identical code that's not strict mode.
 - Prohibits some syntax likely to be defined in future versions of ECMAScrip
*/

// Whole-script strict mode syntax
"use strict";
var v = "Hi! I'm a strict mode script!";

// Strict mode for functions
/*
Likewise, to invoke strict mode for a function, put the exact statement "use strict"; (or 'use strict';) in the function's body before any other statements.
*/

function strict() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() {
  return "I'm not strict.";
}

// Strict mode for modules
function strict() {
  // because this is a module, I'm strict by default
}
export default strict;
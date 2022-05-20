/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

 - The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

 - The second part creates the immediately invoked function expression "()" through which the JavaScript engine will directly interpret the function.
*/

// IIFE
(function () {
  console.log("IIFE");
})();

// Arrow Function IIFE
(() => {
  console.log("Arrow Function IIFE");
})();

// async IIFE
(async () => {
  console.log("Async IIFE");
})();

// AVOID Polluting global namespaces
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.

/* Execute an async function */

const getFileStream = async (url) => {
  /* implementation */
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();

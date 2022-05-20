/*
 An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
*/

// Example__________

function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
      //   reject();
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall()
  .then(() => {})
  .catch((err) => {
    console.log("An error occurred");
  });

// Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. It means that we have to handle the promise rejection as well

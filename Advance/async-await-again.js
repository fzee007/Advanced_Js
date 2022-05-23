async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // done!
}

f();


// *************************************** //

// If we try to use await in a non-async function, there would be a syntax error:
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}

// *************************************** //
async function showAvatar() {

  // read our JSON
  let response = await fetch(/* Fetching from another API */);
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(/* Github API to fetch user */ );
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));

  img.remove();

  return githubUser;
}

showAvatar();

// *************************************** //


class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();

// *************************************** //

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1 (this is the same as (result => alert(result)))
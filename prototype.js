function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(`${this.email} has logged in`);
};

User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.email} has logged out`);
};

// function Admin(...args) {
//   User.apply(this, args);
//   this.role = "Super Admin";
// }

// Admin.prototype = Object.create(User.prototype);

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("abc@abc.com", "fzee07");
var userTwo = new User("xyz@xyz.com", "fzee007");
var admin = new Admin("lmn@lmn.com", "lmn");

var users = [userOne, userTwo, admin];

//
// console.log(userOne);
// console.log(userTwo);
// userTwo.login();
// userOne.login();
// var admin = new Admin("ijk@ijk.com", "ijk");

admin.deleteUser(userTwo);

console.log(User);

console.log(admin);

// admin.login();
// admin.logout();

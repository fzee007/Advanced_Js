const sum = function (a, b) {
  return 2 + 3;
};

module.exports = sum;
// // There are several ways to export a function
// // We will look below

// export default sum;

// This way we export the object of the function not the function itself
// module.exports = {
//   sum: function (a, b) {
//     return a + b;
//   },
// };

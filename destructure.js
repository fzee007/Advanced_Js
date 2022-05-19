// Object destructuring and Restructuring along with Spread Operator

/* Very Simple Example With Array */
const alpha = ["A", "B", "C", "D", "E", "F", "G", "H"];
const number = ["1", "2", "3", "4", "5", "6", "7", "8"];

// Simple Calling
// console.log(alpha[0]);
// console.log(alpha[1]);
// console.log(number[0]);
// console.log(number[1]);

// Advanced Operations with back-tick literals
const [a, b] = alpha;

/*  Above in storing file in const it will store data in consecutive for
    It means that a will store the 1st value and b will store the seconf value and so on.
*/

console.log(`Alphabates destructures ${a} & ${b}`);

/*
 What if we want to skip b here:
 It will just skip the 2nd element and will capture next of B, which is in this case C 
*/

const [x, , y] = alpha;
console.log(`Alphabates destructures ${x} & ${y}`);

/* 
Now its time to see the spread operator
*/

const [l, m, ...rest] = alpha;
console.log(`Alphabates destructures ${l},${m} and ${rest} `);

/* 
One of the most important thing about destructuring is, we can combine 2 arrays very easily
*/
const alphaNumeric = [...alpha, ...number]; // OR const alphaNumeric = alpha.concat(number). Both are the same thing
console.log(
  `AlphaNumeric combining with the help of rest operator ${alphaNumeric}`
);

/* 
We can also destructure the returned value from a function like below:
*/
function sumAndMutliply(a, b) {
  return [a + b, a * b, a / b];
}
console.log(sumAndMutliply(2, 3));

// In an array two values will return 1st one will be the Sum and the Other will be Multiple.
// Let's see how can we destructure this easily.
const [sum, mutliple, division = "No Division"] = sumAndMutliply(2, 3);
console.log("sum", sum);
console.log("mutliple", mutliple);

/*
We can see this that we are also printing the value of Division here. And we have passed the value of Division of as "No Division"
 But if we define the any division functionality inside the sumAndMutliply function the it is not gonna sow the default value
 instead it will show the result of divison
 */
console.log("Division", division);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
The real power of destructured is shwon of with OBJECT
let's have an example
*/

const personOne = {
  firstname: "kyle",
  age: "24",
  address: {
    city: "somewhere_1",
    state: "somewhere_1",
  },
};

const personTwo = {
  age: "20",
  address: {
    city: "somewhere_3",
    state: "somewhere_4",
  },
};

const { firstname, age } = personOne;
console.log("firstname", firstname);
console.log("age", age);
// We can also use default value here as we used above in line number 55 with DIVISION

// We can also destructure the nested object:

const {
  firstname: FirstName,
  address: { state },
} = personTwo;

console.log("First Name", FirstName);
console.log("State", state);

/*
We can also combine two objects as well but it will overwrite the existing value, here personTwo datas will be overwritten with
with the personOne ig they both have same properties. If not then it those will remain same.
*/
const personThree = { ...personOne, ...personTwo };
console.log(personThree);

/////////////////////////////////////////**************************************************/////////////////////////////////////////////////////////////

/*
Another Example
*/

function printUser({ firstname, age }) {
  console.log(`Name is ${firstname}. Age is ${age}`);
}

// We can aslo use the default value here:
/* 
function printUser(firstname, age, favFruit = "Mango") {
  console.log()  console.log(`Name is ${firstname}. Age is ${age}. Fruit is ${favFruit}`);
}
*/

printUser(personOne);

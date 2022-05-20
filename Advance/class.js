/*
    Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
 */

// NOTE :- if we do as below it will be refernce error. So its not a good practice
//
//         const p = new Rectangle(); // ReferenceError
//         class Rectangle {
//             /*.....*/
//         }

class Square {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const sq = new Square(2, 4);

console.log(sq); //We will get undefined because we haven't set any value to it yet.

// We can set the value by setterand get the value by getter in class
// we will see the example

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(Rectangle.name); // output: "Rectangle"

//  If we try to get the area of rectangle and first we need to calculate it inside and then refer it to, from get method

class Rectangle_2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calculateArea() {
    return this.height * this.width;
  }

  get area() {
    return this.calculateArea();
  }
}

const square = new Rectangle_2(10, 10);

console.log(square.area); // 100

// class Polygon {
//   constructor(...sides) {
//     this.sides = sides;
//   }
//   // Method
//   *getSides() {
//     for(const side of this.sides){
//       yield side;
//     }
//   }
// }

// const pentagon = new Polygon(1, 2, 3, 4, 5);

// console.log([...pentagon.getSides()]); // [1,2,3,4,5]

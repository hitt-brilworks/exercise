// Exercise:
// Write a function that intentionally throws an error and use try and catch to handle it.
// Experiment with variable scope by declaring variables inside and outside of functions and blocks.
// Create an object with a method that uses this to refer to the object’s properties.

// Write a function that intentionally throws an error and use try and catch to handle it.
function forThrowingError() {
  throw new Error("This is how we can intentionally throws an error");
}
try {
  forThrowingError();
} catch (e) {
  console.log("We can handle error in catch block");
}

console.log(
  "------------------------------------------------------------------------"
);

// Experiment with variable scope by declaring variables inside and outside of functions and blocks using var
var a = 5;
fun();
function fun() {
  console.log("Inside function scope", a); // it will log undefined because at here i have declared and defined variable with var keyword in global scope and redeclaring in function scope so local variable "a" shadows global variable "a"
  var a = 6;
  console.log("Inside function scope", a); // 6
}
{
  console.log("Inside block scope", a); // 5
  var a = 7;
  console.log("Inside block", a); // 7
}
console.log("Inside global scope", a); // 7
console.log(
  "------------------------------------------------------------------------"
);
// Experiment with variable scope by declaring variables inside and outside of functions and blocks using let
let b = 5; // let declarations are scoped to blocks as well as functions.
fun1();
function fun1() {
  let b = 6;
  console.log("Inside function scope", b); // 6
}
{
  let b = 10;
  console.log("Inside block scope", b); // 10
}
console.log("Inside global scope", b); // 5
console.log(
  "------------------------------------------------------------------------"
);
// Experiment with variable scope by declaring variables inside and outside of functions and blocks using let
const c = 5;
fun1();
function fun1() {
  const c = 6;
  console.log("Inside function scope", c); // 6
}
{
  const c = 10;
  console.log("Inside block scope", c); // 10
}
console.log("Inside global scope", c); // 5

// Create an object with a method that uses this to refer to the object’s properties.
const person = {
  name: "hit",
  age: 19,
  getPersonDetails() {
    return `Name : ${this.name} , Age : ${this.age}`;
  },
};

console.log(person.getPersonDetails());

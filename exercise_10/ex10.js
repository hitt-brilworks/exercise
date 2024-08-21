// Exercise:
// ○ Create a function that takes two numbers as parameters and returns their sum.
// ○ Write a function that checks if a number is even or odd.
// ○ Experiment with function expressions and arrow functions.

// Create a function that takes two numbers as parameters and returns their sum.
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 2));

// Write a function that checks if a number is even or odd.
const checkEvenOrOdd = (num) =>
  num % 2 === 0
    ? "Given number is an even number."
    : "Given number is an odd number.";
console.log(checkEvenOrOdd(5));

// Experiment with function expressions and arrow functions.
function funExp() {
  console.log("This is how you can create function expression in javascript.");
}

const arrowFun = () =>
  console.log("This is how you can create arrow function in javascript.");

funExp();
arrowFun();

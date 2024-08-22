// Exercise:
// Write two functions: one declared with function and one with a function expression, and observe hoisting behavior.
// Create a function that accepts a variable number of arguments and logs each one.
// Use the arguments object to sum all the passed arguments in a function.

// Write two functions: one declared with function and one with a function expression, and observe hoisting behavior.
fun1(); //  it will not throw an error because function declarations are hoisted at the top of their scope
function fun1() {
  console.log("It's function declaration");
}

fun2(); // it will throw an error because function expressions are not hoisted at the top of their scope
const fun2 = function funExp() {
  console.log("This is an example of function expression");
};

// Create a function that accepts a variable number of arguments and logs each one.
function funcVarNumArgsExample(...args) {
  args.forEach((e) => console.log(e));
}
funcVarNumArgsExample(1, 2, 3, 4, 5, 6);

// Use the arguments object to sum all the passed arguments in a function.
sum(1, 2, 3, 4, 5, 6);
function sum() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  console.log(`sum of given numbers: ${sum}`);
}

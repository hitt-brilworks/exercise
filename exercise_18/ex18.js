// Exercise:
// Create a function that uses the rest operator to accept an arbitrary number of arguments and returns their sum.
// Write a function with a default parameter and test it by calling the function with and without arguments.
// Experiment with combining rest parameters with other named parameters.

// Create a function that uses the rest operator to accept an arbitrary number of arguments and returns their sum.
console.log(sum(1, 2, 3, 4, 5, 6));
function sum(...args) {
  return args.reduce((acc, element) => acc + element);
}

// Write a function with a default parameter and test it by calling the function with and without arguments.
defaultParamsTest("white"); // calling the function with argumentsfunction with arguments
defaultParamsTest(); // calling the function without arguments
function defaultParamsTest(color = "red") {
  console.log(`you choose ${color} color`);
}

// Experiment with combining rest parameters with other named parameters.
combiningNamedAndRestParams(1, 2, 3, 4, 5, 6);
function combiningNamedAndRestParams(a, b, c, ...args) {
  console.log([a, b, c, ...args]);
}

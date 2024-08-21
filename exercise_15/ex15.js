// Exercise:
// Create a new array that combines two existing arrays using the spread operator.
// Create a copy of an object and modify one of its properties without affecting the original object.
// Use the spread operator to pass multiple arguments to a function.

// Create a new array that combines two existing arrays using the spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);

// Create a copy of an object and modify one of its properties without affecting the original object.
const obj1 = {
  name: "hit",
  age: 19,
};

const obj2 = { ...obj1, name: "Hit Trivedi" };

console.log(obj1);
console.log(obj2);

// Use the spread operator to pass multiple arguments to a function.
function fun(...args) {
  return console.log(args);
}

fun(1, 2, 3, 4, 5, 6);

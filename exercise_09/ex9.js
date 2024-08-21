// Exercise:
// ○ Create an array of numbers and log its length.
// ○ Access individual elements of the array and modify them.
// ○ Add and remove elements using push, pop, shift, and unshift.

// Create an array of numbers and log its length.
const arr = [0, 1, 2, 3, 4, 5];
console.log("length of an array:", arr.length); // length of an array: 6

// Access individual elements of the array and modify them.
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 1;
}
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// Add and remove elements using push, pop, shift, and unshift.
arr.push(7);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

arr.shift();
console.log(arr); // [ 2, 3, 4, 5, 6 ]

arr.unshift(1);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

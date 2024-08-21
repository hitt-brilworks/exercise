// Exercise:
// ○ Use filter to create a new array with only the even numbers from an existing array.
// ○ Use map to create a new array with each number doubled.
// ○ Use reduce to find the sum of all numbers in an array.

// Use filter to create a new array with only the even numbers from an existing array.
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((item) => item % 2 === 0));

// Use map to create a new array with each number doubled.
console.log(arr.map((item) => item * 2));

// Use reduce to find the sum of all numbers in an array.
console.log(arr.reduce((accumulator, item) => accumulator + item, 0));

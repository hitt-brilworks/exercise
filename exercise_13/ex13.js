// Exercise:
// ○ Create an array of numbers and sort them in ascending and descending order.
// ○ Join an array of words into a single string with spaces in between.
// ○ Iterate over an array using forEach and display each element.

// Create an array of numbers and sort them in ascending and descending order.
const arr = [1, 3, 2, 6, 5, 4];
// sorting array in ascending order
console.log(arr.sort((a, b) => (a > b ? 1 : -1)));
// sorting array in descending order
console.log(arr.sort((a, b) => (a > b ? -1 : 1)));

// Join an array of words into a single string with spaces in between.
const words = ["My", "name", "is", "hit."];
console.log(words.join(" "));

// Iterate over an array using forEach and display each element.
arr.forEach((item) => {
  console.log(item);
});

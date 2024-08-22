// Exercise:
// Create a Set with a list of unique numbers and demonstrate adding, deleting, and checking for values.
// Create a Map to store key-value pairs and demonstrate adding, retrieving, and deleting entries.
// Iterate over the entries of a Map and log the key-value pairs.

// Create a Set with a list of unique numbers and demonstrate adding, deleting, and checking for values.
const numbers = new Set([1, 2, 3, 4, 5, 6]);
// Adding an element to the Set
numbers.add(7);
// Deleting an element from the Set
numbers.delete(7);
// Checking if an element exists in the Set
console.log(numbers.has(1)); // Output: true

// Create a Map to store key-value pairs and demonstrate adding, retrieving, and deleting entries.
const collection = new Map([
  ["key1", "value1"],
  ["name", "hit"],
]);
// Adding an element to the Map
collection.set("age", 19);
// Retrieving elements in the Map
collection.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));
// Deleting an element from the Map
collection.delete("key1");

// Iterate over the entries of the Map and log the key-value pairs.
collection.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));

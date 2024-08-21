// Exercise:
// ○ Create an object to represent a person with properties like name, age, and email.
// ○ Access and log the properties using both dot notation and bracket notation.
// ○ Add a method to the object that returns a string with the person’s details.

// Create an object to represent a person with properties like name, age, and email.
const person = {
  name: "Hit",
  age: "19",
  email: "hit.t@brilworks.com",
};

// Access and log the properties using both dot notation and bracket notation.
console.log(person.name);
console.log(person["name"]);

// Add a method to the object that returns a string with the person’s details.
person.getDetails = function () {
  return `person's name: ${this.name}, age: ${this.age} and email: ${this.email}`;
};

console.log(person.getDetails());

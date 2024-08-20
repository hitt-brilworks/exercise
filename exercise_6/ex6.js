// Exercise:
// ○ Create a JavaScript file and declare variables using let, var, and const.
// ○ Assign different values to the variables and log them to the console.
// ○ Experiment with reassigning variables and observe how const behaves.

// reference : https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/

var var1;
let var2;
const var3 = "dummy"; // The const variable must be initialized at the time of declaration with the variable name.

// defining variables which are declared with var and let
var1 = "dummy";
var2 = "dummy";

console.log(var1);
console.log(var2);
console.log(var3);

// Experiment with reassigning variables and observe how const behaves.
var1 = "dum";
var2 = "dum";
var3 = 5; // it will throw an error "TypeError: Assignment to constant variable."

console.log(var1);
console.log(var2);
console.log(var3);

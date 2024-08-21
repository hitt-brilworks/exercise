// Exercise:
// ○ Create an array of strings representing a list of tasks.
// ○ Implement functions to add, remove, update, and display tasks.
// ○ Write a function that searches for a task by name and returns its index.

// Create an array of strings representing a list of tasks.
const listOfTasks = ["programming", "gaming", "running", "dancing"];

// Implement functions to add, remove, update, and display tasks.
// adding task
function addTask(task) {
  listOfTasks.push(task);
}

// removing task
function removeTask(task) {
  const index = listOfTasks.indexOf(task);
  if (index === -1) {
    return console.log("Task which you want to remove doesn't exist!");
  }
  listOfTasks.splice(index, 1);
}

// updating task
function updateTask(prevTask, currentTask) {
  const index = listOfTasks.indexOf(prevTask);
  if (index === -1) {
    return console.log("Task which you want to update doesn't exist!");
  }
  listOfTasks.splice(index, 1, currentTask);
}

// displaying task
function displayTask() {
  console.log("Displaying all tasks:");
  listOfTasks.forEach((task, index) => {
    console.log(`Task at ${index} : ${task}`);
  });
}

// Write a function that searches for a task by name and returns its index.
// searching task
function searchingTask(task) {
  const index = listOfTasks.indexOf(task);
  if (index === -1) {
    return console.log("Task doesn't exist!");
  }
  return console.log(index);
}

// adding task
addTask("playing");

// removing task
removeTask("playing");

// updating task
updateTask("gaming", "cooking");

// displaying task
displayTask();

// searching task
searchingTask("programming");

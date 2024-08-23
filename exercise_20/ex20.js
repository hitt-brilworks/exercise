// Exercise:
// Create a promise that resolves after 2 seconds and log a message when it’s done.
// Use async and await to handle the promise in an asynchronous function.
// Experiment with setTimeout to log a message after a delay and setInterval to log a message repeatedly every second.

// Create a promise that resolves after 2 seconds and log a message when it’s done.
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
});

p1.then(() => {
  console.log("Promise resolved after 2 seconds.");
}).catch((err) => console.log("Promise rejected"));

// Use async and await to handle the promise in an asynchronous function.
const p2 = new Promise((resolve, reject) =>
  resolve("Handling promise using async and await.")
);

async function handlingPromiseUsingAsyncAwait() {
  try {
    const data = await p2;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

handlingPromiseUsingAsyncAwait();

// Experiment with setTimeout to log a message after a delay and setInterval to log a message repeatedly every second.
setTimeout(() => console.log("This message will log after 1 second."), 1000);

setInterval(
  () => console.log("This message will log in every 1 second."),
  1000
);

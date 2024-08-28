// Exercise:
// Create a class called the stack that implements push / pop methods and count property using ES6 classses

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    this.items.push(item);
    this.count++;
  }

  pop() {
    if (this.items.length === 0) return "Underflow!";
    this.count--;
    return this.items.pop();
  }
}

const animes = new Stack();

animes.push("Naruto");
animes.push("Demon Slayer");
animes.push("One piece");

console.log(`Total animes: ${animes.count}`);

const removedAnime = animes.pop();

if (removedAnime !== "Underflow!") {
  console.log(`Removed element: ${removedAnime}`);
} else {
  console.log("Stack is empty!");
}

console.log(`Total animes: ${animes.count}`);

console.log(`Animes: ${animes.items}`);

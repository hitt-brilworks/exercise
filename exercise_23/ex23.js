// Exercise:
// Write an example program for polymorphism

// Example of run time polymorphism
function Parent() {}

Parent.prototype.display = (firstName, lastName) => {
  console.log(`First Name: ${firstName} , Last Name: ${lastName}`);
};

function Child1() {}

Child1.prototype = Object.create(Parent.prototype);
Child1.prototype.constructor = Child1;

Child1.prototype.display = (firstName) => {
  console.log(`First Name: ${firstName}`);
};

function Child2() {}

Child2.prototype = Object.create(Parent.prototype);
Child2.prototype.constructor = Child2;

Child2.prototype.display = (firstName) => {
  console.log(`Last Name: ${firstName}`);
};

const obj1 = new Child1();
obj1.display("Hit");

const obj2 = new Child2();
obj2.display("Trivedi");

const obj3 = new Parent();
obj3.display("Hit", "Trivedi");

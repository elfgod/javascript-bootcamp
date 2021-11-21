let greetings = () => {
  return 'Hello World!'
};

let message = greetings();
console.log(message); // Hello World!

console.log("\n");

// Single line arrow function
let greetings2 = () => 'Hello World!'
let message2 = greetings2();
console.log(message2);

console.log("\n");

// One párameter arrow funcion
let greetings3 = name => 'Hello ' + name;
let message3 = greetings3('JohnDoe');
console.log(message3);

console.log("\n");

// Two parameters single line arrow function
let sum = (num1, num2) => num1 + num2;
let output = sum(10, 5);
console.log(output);

console.log("\n");

// This keyword in normal functions vs arrow functions
let messageObject = {
  name: 'John',
  regularFunction: function() {
    console.log(this); // this will print messageObject Object
    console.log('Hello ' + this.name);
  },
  arrowFunction: () => console.log('Hi ' + this.name)
}
messageObject.regularFunction(); // Hello John
messageObject.arrowFunction(); // Hello
console.log(this); // Windows Object
console.log(this.name) // <empty string>
let greeting = {} // empty pbject

greeting.sayHi = function() {
    console.log('Hi');
    console.log(this);
}

greeting.sayHi(); // Hi
                  // {sayHi:f}

console.log("\n");
console.log("##########");

function sayHi() {
  console.log('Hi');
  console.log(this);
  console.log("##########");
}

sayHi();

let greetingNew = new sayHi(); // Hi
                               // [obj Object] empty Object


/*
apply vs call 
apply() array input with similar elements
call() individual arguments of varying type 
*/

console.log("\n");
console.log("##########");
console.log("call() Method:");

let person1 = {name: 'John', age: 22}
let person2 = {name: 'Mary', age: 26}
let sayHello = function() {
  console.log('Hello, ' + this.name);

}
sayHello(); // Hello,
sayHello.call(); // Hello,
sayHello.call(person1) // Hello, John
sayHello.call(person2) // Hello, Marry

console.log("\n");
console.log("##########");

let sayHi2 = function(message) {
  console.log(message + ', ' + this.name);
}

sayHi2.call(person1, 'Hi') // Hi, John

console.log("\n");
console.log("##########");
console.log("apply() Method:");

function introduction(name, profession) {
  console.log('My name is ' + name + ' and I am a ' + profession + '.');
  console.log(this);
}
introduction('John', 'student');
introduction.apply(undefined, ['Mary', 'Lawyer']);
introduction.call(undefined, 'James', 'Artist');

console.log("\n");
console.log("##########");
console.log("bind() Method:");
// Makes a copy of a function to change the value of this

let person1Bind = {name: 'Mary',
                  getName: function() {
                    return this.name;
                  }

};
let person2Bind = {name: 'John'};
let getNameCopy = person1Bind.getName
                            .bind(person2Bind);
console.log(getNameCopy()); // John
console.log(getNameCopy); // copy of person1Bind getName function


console.log("\n");
console.log("##########");
console.log("parseInt, parseFloat, escape, unescape");
console.log("\n");
console.log("##########");
console.log("eval:");
let x = 1 , y = 2 , s = 'abc';
console.log(eval('x + y + 1')) // 4
console.log(eval('x + y + s')) // 3abc

console.log("\n");
console.log("##########");
console.log("parseInt:");
// The second argument is the base or radix

console.log(parseInt('F', 16)); // 15 , base 16
console.log(parseInt('15', 10)); // 15, base in decimal
console.log(parseInt('Hi', 10)); // NaN

console.log("\n");
console.log("##########");
console.log("parseFloat:");

console.log(parseFloat('3.99')); // 3.99
console.log(parseFloat('3.99e-1')); // 0.399
console.log(parseFloat('')); // NaN

console.log("\n");
console.log("##########");
console.log("escape:");
// returns the hexadecimal enconding of an argument in the
// isolated one character set
console.log(escape('text')); // text
console.log(escape(' ')); // %20
console.log(escape('abc&%')); // abc%26%25

console.log("\n");
console.log("##########");
console.log("unescape Method:");
// Unescape opposite of Escape, it returns the ASCII string for
// a given input value

console.log(unescape('text')); // text
console.log(unescape('%20')); //
console.log(unescape('abc%26%25')); //abc&%

console.log("\n");
console.log("##########");
console.log("Default Parameters:");
// Allows you to give a default valur to a
// parameter in a function

// Default parameter should always come after the regular parameters

function defaultParameter(name = 'World') {
  console.log('Hello ' + name);
}
defaultParameter();  // Hello World
defaultParameter('John'); // Hello John

function defaultParameter2(message, name = 'World') {
    console.log(message + ' ' + name);
}
// function sayHiDefaultParameter2(name = 'World', message) {} // undefined Hello
defaultParameter2('Hello'); // Hello World
defaultParameter2('Hi', 'John'); // Hi John

console.log("\n");
console.log("##########");
console.log("Rest Parameters:");
// You can define a function to store multiple arguments
// in a single array

// Rest parameters should appear after any regular parameters

function restParameters(...names) {
  names.forEach(name => console.log('Hi ' + name));
}
restParameters('Mary', 'John', 'James'); // Hi Mary, Hi John, Hi James

function restParameters2(message, ...names) {
  console.log(message + ' everyone!');
  names.forEach(name => console.log('Hi ' + name));
}
// function restParameters2(...names, message) {} // SyntaxError
restParameters2('Welcome', 'Mary', 'John', 'James');
// Welcome everyone
// Hi Mary, Hi John, Hi James

console.log("\n");
console.log("##########");
console.log("Spread Operator:");
// Opposite of how a rest parameter works

function spreadOperator(person1, person2) {
  console.log('Hello ' + person1 + ' and ' + person2);

}

let names = ['John', 'Mary'];
spreadOperator(...names); // Hello John and Mary

function displaySO(char1, char2, char3, char4) {
  console.log(char1, char2, char3, char4);

}

let letters = 'abcd';
displaySO(...letters); // a b c d
let letters = 'abcdefg'; // we only have 4 parameters
displaySO(...letters); // a b c d

/*
function displaySO2(char1, char2, char3, char4, ...others) {
  console.log(others);
  console.log(char1, char2, char3, char4);

}

displaySO2(...letters;
// (3) ["e", "f", "g"]
// a b c d
// additional letters get stored in the rest parameter
*/

// Rest parameter collects individual arguments and stores them in an array
// Spread Operator takes an array as argument and spreads it into individual parameters
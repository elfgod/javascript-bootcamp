/* 10. Arrays

- Creating and Initializing Arrays
- Accessing Array Items
- Manipulating Arrays
- slice() and splice()
- Array Searching and Looping
- Arrays in the DOM

*/

// Creating and Initializing Arrays

// Create an Array
// let array = [ ];

// Initialize an aArray
// let values = Array.of(1, 3, 4);

// Array
const values = ['a', 'b', 'c'];

console.log(values);
console.log(typeof values); // object
console.log(Array.isArray(values)); // true

// ####################
// Accessing an Array Items

console.log( values[0] ); // a
console.log( values[1] ); // b
console.log( values[2] ); // c

values[0] = 'x';
console.log( values[0] ); // x

// ####################
// Manipulating Arrays
// push
values.push('d');
console.log( values ); // x b c d

// pop takes the last element of the array
values.pop();
console.log( values ); // x b c

// shift takes the first element of the array
values.shift();
console.log( values ); // b c

// unshift adds value to the first place
values.unshift('x');
console.log( values ); // x b c

values.pop();
values.pop();
values.pop();
console.log( values ); // []
values.push('a','b','c','d','e','x');
console.log( values ); // a b c d e
let last = values.pop();
console.log(values, last); // [a b c d e], x

let first = values.shift();
console.log(first, values); // a, [b c d e]

// slice() and splice()
// slice creates a new array of a based one
// splice insert or delete elements somewhere in the array

// slice()
const valuez = ['a', 'b', 'c'];
const newSlice = valuez.slice(1, 2);
console.log(newSlice); // b

// splice() ['a', 'b', 'c'];
valuez.splice(1, 1);
console.log( valuez ); // a c

// splice() for inserting
// 1 where you want to start
// 0 the number of items you want to delete
valuez.splice(1, 0, 'foo');
console.log( valuez ) // a foo c

valuez.splice(1, 1, 'b'); 
console.log( valuez ); // a b c

valuez.push('d', 'e', 'f'); // a b c d e f

valuez.splice(1, 4);
console.log( valuez ); // a f

// ####################
// Array Searching and Looping

const valuex = ['a', 'b', 'c', 'd', 'e', 'f'];
// indexOf()
console.log( valuex.indexOf('e')); // 4
console.log( valuex.indexOf('x')); // -1

// filter()
// filters the array starting from the condition to the end
const setFilter = valuex.filter(function(item) {
    console.log('item:', item);
    return item > 'b';
});
console.log( setFilter ); // c d e f

// find()
// stops when finds the first item and prints it
const valueFind = ['a', 'bbb', 'c'];
const setFind = valueFind.find(function(item) {
    console.log('item:', item);
    return item.length > 1;
});
console.log( setFind ); // bbb

// forEach()
valuex.forEach(function(item) {
    console.log(item); // a b c
})

// ####################
// Arrays in the DOM

// this loops all the classes called it "container"
// this takes out container[0]
const containers =
    document.getElementsByClassName('container');
containers[0].classList.add('d-none');
console.log(containers);
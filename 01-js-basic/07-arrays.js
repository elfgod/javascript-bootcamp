/* 
    Class 07
*/

// START ====================
// Arrays @@@@@ //

/*
1.Creating and Initializing Arrays
2.Accessing Array Items
3.Manipulating Arrays
4.slice() and splice()
5.Array Searching and Looping
6.Arrays in the DOM
*/

// NEWLINE ********************

console.log("1.Creating and Initializing Arrays:");
console.log("\n");

// Create an Array
console.log("let array = [ ]");
let array = [ ];
console.log("\n");

// Initialize an aArray
console.log("let values = Array.of(1, 3, 4)");
let arrayOf = Array.of(1, 3, 4);
console.log(arrayOf);
console.log("\n");

// Array
console.log("const arrayValues = ['a', 'b', 'c']")
const arrayValues = ['a', 'b', 'c'];
console.log(arrayValues);
console.log("\n");

const values = ['a', 'b', 'c'];
console.log("const values = ['a', 'b', 'c']")
console.log("\n");

console.log("typeof values : ", typeof values); // object
console.log("\n");

console.log("Array.isArray(values) : ", Array.isArray(values)); // true

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Accessing Array Items:");
console.log("\n");
// Accessing an Array Items

console.log("values[0] : ", values[0]); // a
console.log("values[1] : ", values[1]); // b
console.log("values[2] : ", values[2]); // c
console.log("\n");

values[0] = 'x';
console.log("values[0] : ", values[0]); // x

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Manipulating Arrays:");
console.log("\n");
// push

console.log("array : ", values)
console.log("\n");

values.push('d');
console.log("values.push('d') : ", values ); // x b c d
console.log("\n");

// pop takes the last element of the array
values.pop();
console.log("values.pop() : ", values ); // x b c
console.log("\n");

// shift takes the first element of the array
values.shift();
console.log("values.shift() : ", values ); // b c
console.log("\n");

// unshift adds value to the first place
values.unshift('x');
console.log("values.unshift('x') : ", values ); // x b c
console.log("\n");

values.pop();
values.pop();
values.pop();

console.log("values : ", values ); // []
console.log("\n");

values.push('a','b','c','d','e','x');
console.log("values.push('a','b','c','d','e','x');");
console.log("\n");

console.log(values); // a b c d e x
let last = values.pop();
console.log("let last = values.pop()")
console.log("\n");

console.log(values); // a b c d e 
console.log("\n");

console.log("values, last : ", values, last); // [a b c d e], x
console.log("\n");

let first = values.shift();
console.log("let first = values.shift()")
console.log("first, values : ", first, values); // a, [b c d e]

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.slice() and splice():");
console.log("\n");
// slice creates a new array of a based one
// splice insert or delete elements somewhere in the array

// slice()
const valuez = ['a', 'b', 'c'];
console.log("const valuez = ['a', 'b', 'c']");
console.log("\n");

const newSlice = valuez.slice(1, 2);
console.log("const newSlice = valuez.slice(1, 2) : ", newSlice); // b
console.log("\n");

// splice() ['a', 'b', 'c'];
console.log("valuez : ", valuez);
console.log("\n");

valuez.splice(1, 1);
console.log("valuez.splice(1, 1)");
console.log("valuez : ", valuez); // a c
console.log("\n");

// splice() for inserting
// 1 where you want to start
// 0 the number of items you want to delete
valuez.splice(1, 0, 'foo');
console.log("valuez.splice(1, 0, 'foo')")
console.log("valuez : ", valuez); // a foo c
console.log("\n");

valuez.splice(1, 1, 'b');
console.log("valuez.splice(1, 1, 'b')")
console.log("valuez : ", valuez); // a b c
console.log("\n");

valuez.push('d', 'e', 'f'); // a b c d e f
console.log("valuez.push('d', 'e', 'f')")
console.log("valuez : ", valuez);
console.log("\n");

valuez.splice(1, 4);
console.log("valuez.splice(1, 4)");
console.log("valuez : ", valuez); // a f

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("5.Array Searching and Looping:");
console.log("\n");

const valuex = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log("const valuex = ['a', 'b', 'c', 'd', 'e', 'f'];")
console.log("\n");

// indexOf()
console.log("valuex.indexOf('e') : ", valuex.indexOf('e')); // 4
console.log("valuex.indexOf('x') : ", valuex.indexOf('x')); // -1
console.log("\n");

// filter()
// filters the array starting from the condition to the end
const setFilter = valuex.filter(function(item) {
    console.log('item:', item);
    return item > 'b';
});
console.log("\n");

console.log("setFilter return item > 'b' : ", setFilter ); // c d e f
console.log("\n");

// find()
// stops when finds the first item and prints it
const valueFind = ['a', 'bbb', 'c'];
console.log("const valueFind = ['a', 'bbb', 'c'] : ", valueFind);
console.log("\n");

const setFind = valueFind.find(function(item) {
    console.log('item:', item);
    return item.length > 1;
});
console.log("\n");

console.log("setFind", setFind ); // bbb
console.log("\n");

console.log("valuex : ", valuex);
// forEach()
valuex.forEach(function(item) {
    console.log(item); // a b c d e f
});
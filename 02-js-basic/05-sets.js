/* 
    Lesson 05
*/

// START ====================
// Working with Sets @@@@@ //
console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#iterating_sets");
console.log("\n");

/*
1.Add Set
2.Sets
3.Iterating a Set
*/

// NEWLINE ********************

console.log("1.Add Set:");
console.log("\n");

let newAmount = 100;
let newMonth = 'january';

const monthlySales = new Set();
const monthlyLabels = new Set();

monthlyLabels.add('january');
monthlyLabels.add('february'),
monthlyLabels.add('march');
console.log("monthlyLabels", monthlyLabels);
console.log("\n");

monthlySales.add(150);
monthlySales.add(200),
monthlySales.add(250);
console.log("monthlySales", monthlySales);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Sets:");
console.log("\n");

const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

mySet1.add([100, 200, 300]); // Adds an Array to a Set
console.log(mySet1);

mySet1.add(44, 55, 66); // this won't work only will add 44
console.log(mySet1);

mySet1.add(55).add(66).add(77); // add multiple values to a Set
console.log(mySet1);

mySet1.add([{test: 'this'}]); // Array of Objects
console.log(mySet1);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Iterating a Set:");
console.log("\n");

console.log("For of : ");
for (let total of mySet1) {
    console.log(total);
}
console.log("\n");

console.log("ForEach : ");
mySet1.forEach((mySet1) => {
    console.log(mySet1);
})

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.WeakSet:");
console.log("\n");

const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
ws.has(bar);    // true, bar is retained

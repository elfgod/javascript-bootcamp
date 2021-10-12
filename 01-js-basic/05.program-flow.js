/* 
    Lesson 05
*/

// START ====================
// Program flow @@@@@ //

/*
1.if ... else Statements
2.truthy and Falsy expresion
3.Block scope
4.Loops: for, while, do...while
*/

// NEWLINE ********************

console.log("1.if ... else Statements:");
console.log("\n");

if (5 === 5) { // true
    console.log('true');
}
console.log("if (5 === 5) true, this will print");
console.log("\n");

if (5 > 10) { // false
    console.log('no');
}
console.log("if (5 > 10) false, this will not print");
console.log("\n");

if (5 >= 5) { // true
    console.log('true');
}
console.log("if (5 >= 5) true, this will print");
console.log("\n");

if (true){ // true
    console.log('true');
}
console.log("if (true) true, this will print");
console.log("\n");

if (!true){ // 
    console.log('not true');
}
console.log("if (!true) false, this will not print");

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.truthy and Falsy expresion:");
console.log("\n");
// FALSE: false, 0, "", '', null, undefined, NaN
// TRUE: true, everything NOT falsy, 0.1+, "0"

// the + plus sign converts the string to number
// toFixed converts number to string
console.log("if ( +(1.1 + 1.3).toFixed(2) === 2.4 )");
if ( +(1.1 + 1.3).toFixed(2) === 2.4 ){ // true
    console.log('true');
}

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Block scope:");
console.log("\n");

// ####################
// Block scope

/* if (true) {
    let value = 'yes';
}
console.log(value); // Uncaught ReferenceError: value is not defined
 */

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.Loops: for, while, do...while:");
console.log("\n");

console.log("for (let i = 0; i < 3; i++)")
for (let i = 0; i < 3; i++){
    console.log(i);
} // 0 1 2
console.log("\n");

console.log("for (let i = 0; i <= 5; i++)")
for (let i = 0; i <= 5; i++){
    console.log(i);
} // 0 1 2 3 4 5
console.log("\n");

// while() loop
console.log("let whileLoop = 4")
let whileLoop = 4;
while (whileLoop > 0) {
    console.log(whileLoop);
    whileLoop--;
} // 4 3 2 1
console.log("\n");

// do ... while() loop
// code executes once always
console.log("let doWhile = 4")
let doWhile = 4;
do {
    console.log(doWhile);
    doWhile--;
} while (doWhile > 0); // 4 3 2 1


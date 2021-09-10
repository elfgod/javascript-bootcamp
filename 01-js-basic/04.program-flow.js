/* 7. Program flow
- if ... else Statements
- truthy and Falsy expresion
- Comparing === to ==
- The ternary operator
- Block scope
- Loops: for, while, do...while
*/

// ####################
// if() Statement
if (5 === 5) { // true
    console.log('yes');
}
if (5 > 10) { // false
    console.log('no');
}
if (5 >= 5) { // true
    console.log('yes');
}
if (true){ // true
    console.log('true');
}
if (!true){ // 
    console.log('not true');
} 

// false: false, 0, "", '', null, undefined, NaN
// true: true, everything NOT falsy, 0.1+, "0"

// the + plus sign converts the string to number
// toFixed converts number to string
if ( +(1.1 + 1.3).toFixed(2) === 2.4 ){ // true
    console.log('true');
}

let price = 11;

if (price >= 10 && price <=20  ) {
    console.log('price is >= 10');
} else if (price >= 21) {
    console.log('price is >= 21');
} else {
    console.log('price is < than 10')
}

// ####################
// Comparing === to ==

if (1 === "1") {  // false
    console.log('false');
}
if (1 == "1") {  // true
    console.log('true');
}

if (1 !== "1") { // true
    console.log('true');
}

if (1 != "1") { // false
    console.log('false')
}

// ####################
// The ternary operator

// (condition) ? true-statement : false-statement;

let message = (price > 10) ? 'expensive' : 'cheap'
console.log(message) // expensive

// ####################
// Block scope

/* if (true) {
    let value = 'yes';
}
console.log(value); // Uncaught ReferenceError: value is not defined
 */

// ####################
// Loops: for, while, do...while

for (let i = 0; i < 3; i++){
    console.log(i);
} // 0 1 2

for (let i = 0; i < 3; i++){
    console.log(i);
} // 0 1 2

// while() loop
let whileLoop = 4;
while (whileLoop > 0) {
    console.log(whileLoop);
    whileLoop--;
} // 4 3 2 1

// do ... while() loop
// code executes once always 
let doWhile = 4;
do {
    console.log(doWhile);
    doWhile--;
} while (doWhile > 0); // 4 3 2 1


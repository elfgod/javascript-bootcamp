/* 
    Lesson 03
*/

/*
1.Typeof
2.String
3.Methods
4.Converting string to numbers & numbers to string
5.Boolean variables
6.Null and Undefined
*/

// START ====================
// typeof @@@@@ //

console.log("1.Typeof:");
console.log("\n");
let price = 20.99;
    price = price - 1;

console.log("typeof price : ",typeof price); // number
console.log("\n");

// NEWLINE ********************

    price = 12;
let taxRate = 0.07;
let totalPriceTaxRate = price * taxRate; // 0.8400000000000001
console.log("totalPriceTaxRate = price * taxRate : ", price * taxRate); 

console.log("\n");
console.log("typeof totalPriceTaxRate = 0.8400000000000001 : ", typeof totalPriceTaxRate);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.String:");
console.log("\n");

// Escaping special characters using backlash \(notation)
let message = "Hello \"World\"";
console.log(message); // Hello "World"
console.log("\n");

    message = `This is a ${message}`;
    console.log(message); // This is a Hello "World"
    console.log("\n");

    message = 'HELLO'
    message += ' world';
console.log(message); // HELLO world

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Methods:");
console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#");
console.log("\n");

    message = message.toLowerCase();
console.log("HELLO world.toLowerCase() : ", message); // hello world
console.log("\n");

    message = message.toUpperCase();
console.log("hello world.toUpperCase() : ", message); // HELLO WORLD
console.log("\n");

    message = message.substring(1);
console.log("HELLO WORLD.substring(1) : ", message); // ELLO WORLD
console.log("\n");

    message = message.length;
console.log("message.length : ", message); // 10
console.log("\n");

    message = '12345';
console.log("message = '12345' : ", typeof message); // string

    
console.log("messager += 2", message += 2); // 123452

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.Converting string to numbers & numbers to string:");
console.log("\n");

amount = 123;
amount = amount.toString();
console.log("amount = 123 : amount.toString() : ", typeof amount); // string
console.log("\n");

amount = Number.parseFloat('123.12');
console.log("amount = Number.parseFloat('123.12') : ", amount); // number

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("5.Boolean variables:");
console.log("\n");

let saved = false;
console.log("let saved = false : ", false); // false
console.log("\n");

saved = true;
console.log("saved = true : ", true); // true
console.log("\n");

// Flip boolean operator
saved = !saved;
console.log("saved = !saved : ", saved) // false
console.log("\n");

saved = !saved;
console.log("saved = !saved : ", saved); // true

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("6.Null and Undefined:");
console.log("\n");
// JS sets values to undefined when not initialized.
// you can set values to null if you want to wipe out data.

let jsAddsUndefined;
console.log("let jsAddsUndefined : ", jsAddsUndefined); // undefined
console.log("\n");

let setValueToNull = null;
console.log("let setValueToNull = null : ", setValueToNull); // null

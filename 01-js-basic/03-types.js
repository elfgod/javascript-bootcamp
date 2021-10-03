// 6. Numbers and Operators

let price = 20.99;
    price = price - 1;

console.log(typeof price); // number


    price = 12;
let taxRate = 0.07;
console.log("price * taxRate : ", price * taxRate); // 0.8400000000000001

let totalPriceTaxRate = price * taxRate;
console.log("totalPriceTaxRate = price * taxRate : ", totalPriceTaxRate);
console.log("\n");
console.log("totalPriceTaxRate = 0.8400000000000001 : ", totalPriceTaxRate);
console.log("\n");
console.log("typeof totalPriceTaxRate", typeof totalPriceTaxRate);


// ####################

// String
// Escaping special characters using backlash \(notation)
let message = "Hello \"World\"";
console.log(message); // Hello "World"

    message = `This is a ${message}`;
    console.log(message); // This is a Hello "World"

    message = 'HELLO'
    message += ' world';
console.log(message); // HELLO world

// Methods 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
    message = message.toLowerCase();
console.log(message); // hello world
    message = message.toUpperCase();
console.log(message); // HELLO WORLD

    message = message.substring(1);
console.log(message); // ELLO WORLD

    message = message.length;
console.log(message); // 5

    message = '12345';
console.log(typeof message); // string
console.log(message + 2); // 123452

// ####################

// Converting string to numbers & numbers to string
amount = 123;
amount = amount.toString();
console.log(typeof amount); // string

amount = Number.parseFloat('123.12');
console.log(amount); // number

// ####################
// Boolean variables

let saved = false;
console.log(false); // false
saved = true;
console.log(true); // true

// Flip boolean operator
saved = !saved;
console.log(saved) // false
saved = !saved;
console.log(saved); // true

// ####################
// null undefined
// js sets values to undefined when not initialized
// you can set values to null if you want to wipe out data

let jsAddsUndefined;
console.log(jsAddsUndefined); // undefined

let setValueToNull = null;
console.log(setValueToNull); // null

// ####################
// Objects and Symbols

let person = {
    firstName: 'josue',
    lastName: 'guzman'
};
console.log(person.firstName + person.lastName); //josueguzman


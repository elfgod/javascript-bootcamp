/* 
    Class 03
*/

/*
1.JavaScript Reserved Words Link
2.Case sensitivity in JavaScript:
3.Variables
4.Assigment Operators
5.Conditional Operators (Ternary Operator)
6.Operator precedence
*/

// START ====================
// fill this space @@@@@ //

console.log("1.JavaScript Reserved Words Link:")
console.log("https://www.w3schools.com/js/js_reserved.asp")
console.log("\n");

console.log("2.Case sensitivity in JavaScript:");
console.log("camel case = camelCase");
console.log("sneak case = sneak_case");
console.log("Kebab case = kebab-case");
console.log("showCode !== ShowCode");
// END ====================
console.log("\n");
console.log("\n");

// NEWLINE ********************
console.log("3.Variables:");

// Declaring variables
let total = 100;
let product = 'hiking boots';
let boolean = true;

// Declaring multiple variables
let price = 100,
    item = 'white t-shirt',
    discounted = false;

/* Naming variables, you can start naming variables
with $, _, and letters but can't start with numbers*/
let $var1 = 1;
let _var2 = 2;
// let 99times = 99; // ERROR this is not valid

// Variables can change with let and var
let shipping = 10;
    shipping = 20;
    shipping = 100;

/* Variables won't change with const you have
to initialize set a value to use const */
const price2 = 10;
// price2 = 20 // ERROR

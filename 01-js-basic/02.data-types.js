/* 
    Lesson 04
*/

// START ====================
// Data types @@@@@ //

/*
1.Primitive(Primary) => Strings, Numbers, Boolean
2.Composite(Reference) => Array, Object, Function
3.Special => Undefined, Null
*/

// This file will have no order

console.log("String text goes here");
console.log("\n");
console.log("My Computer");
console.log("\n");
console.log(10);
console.log("\n");
console.log(15000000);
console.log("\n");
console.log(52.12);
console.log("\n");
console.log(NaN);
console.log("\n");
console.log(true);
console.log("\n");
console.log(false);
console.log("\n");
let undefinedVariable;
console.log(undefinedVariable) // because we didn't give any value

console.log("\n");
let person = {
    name: "Josue",
    age: 18
}
console.log("Person Object =", person);
console.log("\n");
console.log("person.name =", person.name);
console.log("\n");

let personArray = ["Yarelis", 18];
console.log("Person Array", personArray);
console.log("\n");
console.log("personArray[0] =", personArray[0]);
console.log("\n");

let func = function() {
    return 1 + 1;
}
console.log("func() =", func());

console.log("typeof 10 =", typeof 10);
console.log("typeof 50.100 =", typeof 50.100);
console.log("typeof NaN =", typeof NaN);
console.log("typeof true =", typeof true);
console.log("typeof false =", typeof false);
console.log("typeof person =", typeof person);
console.log("typeof personArray =", typeof personArray);
console.log("typeof func =", typeof func);
console.log("typeof undefined =", typeof undefined);
console.log("typeof null =", typeof null);
console.log("\n");

// Ways to declare strings
let str1 = 'Hello world!'; // typeof string
console.log(str1);
let str2 = "Hello world!"; // typeof string
console.log(str2);
let str3 = `Hello world!`; // typeof string
console.log(str3);
let str4 = new String("Hello world!"); // typeof object
console.log(str4);
console.log("\n");

let str5 = "Hello 'world!'";
console.log(str5);
let str6 = 'Hello "world!"';
console.log(str6);
let str7 = "This fil is \"Inception\"";
console.log(str6);
let str8 = "Hello my name is XZY \
and my last name is YXZ";
console.log(str8);
let str9 = "Hello, \n \
My name is XYZ and i want to contact you";
console.log(str9);

console.log()


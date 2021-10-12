/* 
    Lesson 06
*/

// START ====================
// Functions @@@@@ //

/*
1.Function Basic
2.Function Expression
3.Function Passing Values
4.Function Return Values
5.Function Scope
*/

// NEWLINE ********************
console.log("1.Function Basic:");
console.log("\n");

/* function showMessager() {
    console.log('in a function');
}
// call the function
showMessager(); */

function logMessage() {
    console.log('Here is a message');
}

logMessage(); // Here is a message

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Function Expression:");
// assign a function to a variable
console.log("\n");

let fn = function () {
    console.log('Function expression message');
}
fn();
console.log("\n");

let fnArrow = () => {
    console.log('Arrow function message');
}
fnArrow();

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Function Passing Values:");
console.log("\n");

function showMessage(message) {
    console.log(message);
}
showMessage('First msg');
showMessage('Second msg');
console.log("\n");

function showMessages(message, anotherMessage) {
    console.log(message, anotherMessage);
}
showMessages('Josue', 'Guzman');

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.Function Return Values:");
console.log("\n");

function getSecretCode(value) {
    let code = value * 42;
    return code;
}
console.log(getSecretCode(2)); // 84

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("5.Function Scope:");
console.log("\n");
// console.log( code ); // Reference Error  <----------
// code is undefined because is out of Function scope

let key = 20;
function getSecretCodeFunc(value) {

    let keyGenerator = function(){
        let key = 10
        console.log('inside keyGenerator:', key)
    }
    code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    console.log(typeof code);

    return code; 
}
getSecretCodeFunc(2);

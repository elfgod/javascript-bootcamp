/* 8. Functions

function showMessager() {
    console.log('in a function');
}
// call the function
showMessager();

*/

function logMessage() {
    console.log('Here is a message');
}

logMessage();

// ####################
// function expression:
// assign a function to a variable

let fn = function () {
    console.log('Function expression message');
}

fn();

let fnArrow = () => {
    console.log('Arrow function message');
}

fnArrow();

// ####################
// functions passing values
function showMessage(message) {
    console.log(message);
}
showMessage('First msg');
showMessage('Second msg');

function showMessages(message, anotherMessage) {
    console.log(message, anotherMessage);
}
showMessages('Josue', 'Guzman');

// ####################
// Function return values

function getSecretCode(value) {
    let code = value * 42;
    // return value * 42
    return code;
}

console.log( getSecretCode(2)); // 84

// ####################
// Function scope
// console.log( code ); // Reference Error
// code is undefined because is out of Func scope

let key = 42;

function getSecretCodeFunc(value) {

    let keyGenerator = function(){
        let key = 10
        console.log('inside keyGenerator:', key)
    }
    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}

getSecretCodeFunc(2)

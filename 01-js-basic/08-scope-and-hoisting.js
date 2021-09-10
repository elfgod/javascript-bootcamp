/* 11. Scope and Hoisting

- Global Scope
- Function Scope
- var and Hoisting
- Undeclared Variables
- Strict Mode

*/

// Global Scope

let productId = 123; // global scope

function showProductId() {
    return (productId);
}
console.log(showProductId());

// Good practice for no bugs in global scope
// add variables in an object

const app = {
    productId1: 567,
    userName1: 'Josue',
    orderNumber: 54321
};

function showApp() {
    return app.productId1;
}
console.log(showApp());

// ####################
// Function Scope

function functionScope() {
    let productId2 = 9999; // function scope
    return (productId2);
}
console.log(functionScope());
// console.log(productId2); // ReferenceError: productId2 is not defined


// parameter has also function scope
// function showProductId(productId)
// console.log(productId) productId is not defined

// functions inside functions also has their own scope
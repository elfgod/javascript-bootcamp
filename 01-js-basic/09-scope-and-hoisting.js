/* 
    Lesson 09
*/

/*
1.Global Scope
2.Function Scope
*/

// START ====================
// Scope and Hoisting @@@@@ //

console.log("1.Global Scope:");
console.log("\n");
// Global Scope

let productId = 123; // global scope
console.log("let productId = 123 : ", productId);
console.log("\n");

function showProductId() {
    return (productId);
}
console.log("showProductId() : ", showProductId());
console.log("\n");

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
console.log("app.productId1 : ", showApp());

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Function Scope:");
console.log("\n");

function functionScope() {
    let productId2 = 9999; // <-- variable function scope
    return (productId2);
}
console.log("functionScope()", functionScope());
console.log("\n");
console.log("productId2 : ERROR out of scope", ); // ReferenceError: productId2 is not defined
console.log("\n");
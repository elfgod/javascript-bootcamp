/* 
    Lesson 04
*/

// START ====================
// Methods for Working with Arrays @@@@@ //

/*
1.Array.of
2.Spread Operators
3.Using Array.find and findIndex to Find a Value
4.Array Fill
5.Methods of Iterating through Arrays
*/

// NEWLINE ********************

console.log("1.Array.of:");
let arrayOfNumbers = Array.of(1,2,3,4,5);
let arrayOfStrings = Array.of('Hello', 'Hi', 'Hola');

console.log("arrayOfNumbers : ", arrayOfNumbers);
console.log("arrayOfStrings : ", arrayOfStrings);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Spread Operators:");
console.log("\n");

let spreadOperator1 = Array.of(10, 11, 12);
console.log("spreadOperator1 : ", spreadOperator1);
let spreadOperator2 = Array.of(20, 21, 22);
console.log("spreadOperator2 : ", spreadOperator2);
let spreadOperator3 = Array.of(30, 31, 32);
console.log("spreadOperator3 : ", spreadOperator3);

// function to test spread operators
function spreadOperator(a, b ,c) {
    return a+b+c;
}
console.log("\n");
console.log("spreadOperator(spreadOperator1) : ", spreadOperator(spreadOperator1)); // 10,11,12undefinedundefined
console.log("\n");
console.log("spreadOperator(...spreadOperator1) :   ", spreadOperator(...spreadOperator1)); // 33
console.log("\n");
console.log("spreadOperator(...spreadOperator2) :   ", spreadOperator(...spreadOperator2)); // 63
console.log("\n");
console.log("spreadOperator(...spreadOperator3) :   ", spreadOperator(...spreadOperator3)); // 93
console.log("\n");

console.log("spreadOperator : ", spreadOperator(...spreadOperator1),
    spreadOperator(...spreadOperator2), spreadOperator(...spreadOperator3));

let total = Array.of(spreadOperator(...spreadOperator1),
    spreadOperator(...spreadOperator2), spreadOperator(...spreadOperator3));
console.log("\n");

total = spreadOperator(...total);
console.log("total = spreadOperator(...total) : ", total);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Using Array.find and findIndex to Find a Value:");
console.log("\n");

// Array.find
let findOver1k =  Array.of(500, 2000, 9000);

function arrayFind1k(){
    let first1k = findOver1k.find(element => element > 1000);
    console.log(first1k);
}
arrayFind1k(); // 2000

function arrayFindIndex1k(){
    let firstIndex1k = findOver1k.findIndex(element => element > 1000);
    console.log(firstIndex1k);
}
arrayFindIndex1k(); // [1]

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.Array Fill:");
console.log("\n");

let monthlySales = Array.of(700, 500, 350);
function reset2zero(){
monthlySales.fill(0);
}
reset2zero();
console.log("monthlySales : ", monthlySales);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("5.Methods of Iterating through Arrays:");
console.log("\n");

newMonthlySales = Array.of(250, 150, 190);
console.log("newMonthlySales : ", newMonthlySales);
console.log("\n");

let yearlyTotalVar = 0;
function yearlyTotal(x){
    yearlyTotalVar = x + yearlyTotalVar;
    console.log(yearlyTotalVar)
}

newMonthlySales.forEach(yearlyTotal);
console.log("\n");
console.log("yearlyTotalVar : ", yearlyTotalVar);
console.log("\n");

newMonthlySales.push(100, 200);
console.log(newMonthlySales);
console.log("\n");

console.log("yearlyTotalVar : ", yearlyTotalVar);
newMonthlySales.forEach(yearlyTotal);
console.log("yearlyTotalVar : ", yearlyTotalVar);
console.log("\n");

yearlyTotalVar = 0;
newMonthlySales.forEach(yearlyTotal);
console.log("yearlyTotalVar : ", yearlyTotalVar);
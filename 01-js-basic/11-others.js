/* 
    Lesson 11
*/

// START ====================
// Others @@@@@ //

/*
1.toFixed();
2.parseInt();
3.parseFloat()
*/

// variable.valueOF();

// NEWLINE ********************

console.log("1.toFixed():");
console.log("\n");

// boost float number to nearest value
let floatNum = 50.55;
console.log("let floatNum =", floatNum)
console.log("floatNum.toFixed()", floatNum.toFixed());
console.log("\n");

    floatNum = 50.45;
console.log("floatNum =", floatNum)
console.log("floatNum.toFixed()", floatNum.toFixed());
console.log("\n");

    floatNum = 100.123456
console.log("floatNum = ", floatNum);
console.log("floatNum.toFixed(2)", floatNum.toFixed(2));
console.log("floatNum.toFixed(4)", floatNum.toFixed(4));

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.parseInt():");
console.log("\n");

// convert float to integer
console.log(floatNum); // 100.123456
let float2Int = parseInt(floatNum); 
console.log("let float2Int = parseInt(floatNum)");
console.log(float2Int); // 100
console.log("\n");

// convert string float to integer
floatNum = "100.123456";
console.log("floatNum = '100.123456'");
let stringFloat2Int = parseInt(floatNum);
console.log("String Float : let stringFloat2Int = parseInt(floatNum)");
console.log(stringFloat2Int); // 100

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.parseFloat()");
console.log("\n");

console.log("floatNum =", floatNum);
let floatString2Float = parseFloat(floatNum);
console.log("let floatString2Float = parseFloat(floatNum)");
console.log("floatString2Float =", floatString2Float); // 100.123456
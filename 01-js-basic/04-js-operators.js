/* 
    Lesson 04
*/

// START ====================
// JavaScript Operators part 1 @@@@@ //

/*
1.Aritmetic Operators
2.Comparison Operators
3.Logical Operators
4.Assigment Operators
5.Conditional Operators (Ternary Operator)
6.Operator precedence
*/

// NEWLINE ********************

console.log("1.Aritmetic Operators:");
console.log("Operator Sum (+) : 1 + 1 = ", 1+1);
console.log("Operator Subtraction (-) : 5 - 1 = ", 5 - 1);
console.log("Operator Multiplication (*) : 4 * 2 = ", 4 * 2);
console.log("Operator Division (/) : 10 / 2 = ", 10 / 2);
console.log("Operator Remainder (%) : 15 % 2 = ", 15 % 2);
console.log("\n");

let increment = 1;
console.log("let increment = 1;");
console.log("Operator Increment (++) : ++1 = ", ++increment );

console.log("Operator Increment (++) : 2++ = ", increment++ );
console.log("Increment++ = ", increment);

console.log("\n");

let decrement = 10;
console.log("let decrement = 10;");
console.log("Operator Decrement (--) : --10 = ", --decrement);

console.log("Operator Decrement (--) : 10-- = ", decrement--);
console.log("Decrement-- = ", decrement);

console.log("\n");
console.log("Concatenate:");
console.log("Hello" + "World");
console.log("JavaScript " + "Bootcamp");

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Comparison Operators:");
console.log("\n");

console.log("Operator ==");
console.log(" 5 == 5 : ", 5 == 5);
console.log(" 10 == 5 : ", 10 == 5);
console.log(' 1 == "1" : ', 1 == "1");

console.log("\n");
console.log("Operator ===");
console.log(" 2 === 2 : ", 2 === 2);
console.log(" 10 === 3 : ", 10 === 3);
console.log(' 1 === "1" : ', 1 === "1");

console.log("\n");
console.log("Operator !=");
console.log("5 != 5 : ", 5 != 5);
console.log("5 != '5' : ", 5 != '5');
console.log("10 != 5 : ", 10 != 5);

console.log("\n");
console.log("Operator !==");
console.log("5 !== '5' : ", 5 !== '5');

console.log("\n");
console.log("Operator >");
console.log("1 > 2 : ", 1 > 2);
console.log("2 > 1 : ", 2 > 1);

console.log("\n")
console.log("Operator <");
console.log("1 < 2 : ", 1 < 2);
console.log("2 < 1 : ", 2 < 1);

console.log("\n")
console.log("Operator >=");
console.log("2 >= 2 : ", 2 >= 2);

console.log("\n")
console.log("Operator <=");
console.log("5 <= 2 : ", 5 <= 2);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Logical Operators:");
console.log("\n");

console.log("Operator %% AND");
console.log("10 > 5 && 8 < 12 : ", 10 > 5 && 8 < 12);
console.log("12 > 7 && 18 < 12 : ", 12 > 7 && 18 < 7);
console.log("10 > 85 && 45 <= 35: ", 10 > 85 && 45 <= 35);

console.log("\n");

console.log("Operator || OR");
console.log("10 > 5 || 5 > 3 : ", 10 > 5 || 5 > 3);
console.log("10 > 5 || 15 < 13 : ", 10 > 5 || 15 < 13);
console.log("15 > 30 || 5 < 2 : ", 15 > 30 || 5 < 2);

/*
let price = 11;
if (price >= 10 && price <=20  ) {
    console.log('price is >= 10');
} else if (price >= 21) {
    console.log('price is >= 21');
} else {
    console.log('price is < than 10')
} */

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.Assigment Operators");
console.log("\n");

console.log("assigment += 1 : assigment = assigment + 1");
console.log("assigment -= 1 : assigment = assigment - 1");
console.log("assigment *= 1 : assigment = assigment * 1");
console.log("assigment /= 1 : assigment = assigment / 1");
console.log("assigment %= 1 : assigment = assigment % 1");
console.log("\n");

let assigment = 1;
console.log("Operator =");
console.log("let assigment = 1 : ", assigment);
console.log("\n");

assigment = 50;
console.log("Operator +=");
console.log("assigment : ", assigment);
console.log("assigment += 10 : ", assigment += 10);


console.log("\n");
console.log("Operator -=");
console.log("assigment : ", assigment);
console.log("assigment -= 20 : ", assigment -= 20);

console.log("\n");
console.log("Operator *=");
console.log("assigment : ", assigment);
console.log("assigment *= 2 : ", assigment *= 2);

console.log("\n");
console.log("Operator /=");
console.log("assigment : ", assigment);
console.log("assigment /= 10 : ", assigment /= 10);

console.log("\n");
console.log("Operator %=");
console.log("assigment : ", assigment);
console.log("assigment %= 3 : ", assigment %= 3);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("5.Conditional Operators (Ternary Operator)");
// (condition) ? true-statement : false-statement;
console.log("\n");

console.log("10 > 5 ? 'This is true' : 'This is false' : ");
console.log(10 > 5 ? 'This is true' : 'This is false');
console.log("\n");
console.log("10 === '10' ? 'This is true : 'This is false : '");
console.log(10 === '10' ? 'This is true' : 'This is false');
console.log("\n");
console.log("11 > 10 ? 'expensive' : 'cheap'");
console.log(11 > 10 ? 'expensive' : 'cheap');

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("6.Operator precedence");
console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence")
console.log("\n");

console.log("3 + 4 * 5 : ", 3 + 4 * 5);

console.log("4 * 3 ** 2 : ", 4 * 3 ** 2);

console.log("(2 + 2) * 10 : ", (2 + 2) * 10);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("7.Others");
console.log("\n");

// Negative numbers
let amount = 20 - (-2);
console.log("let amount = 20 - (-2) : ", amount);
console.log("\n");
    amount = 0
console.log("amount = 0, --amount : ", --amount); // -1




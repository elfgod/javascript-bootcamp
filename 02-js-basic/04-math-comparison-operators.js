// ####################

/* 4. For/in and for/of Statement

- Math
- Assigment
- Comparison

*/

// Math Mathematical Operators
/*
Addition (+)        = 2 + 3
Subtraction (-)     = 5 - 4
Multiplication (*)  = 2 * 2
Division (/)        = 8 / 4
Exponentiation (**) = 2 ** 2
Modulus (%)         = 9 % 4
Increment (++)      = index++
Decrement (--)      = index--
*/

// Math operators

function mathSample() {
    let price = 200;
    let result = 0;

    console.log("price = " + price.toString());

    // Addition
    result = price + 100;
    console.log("price + 100 = " + result.toString());

    // Subtraction
    result = price - 10;
    console.log("price - 10 = " + result.toString());

    // Multiplication
    result = price * 2;
    console.log("price * 2 = " + result.toString());

    // Division
    result = price / 2;
    console.log("price / 2 = " + result.toString());

    // Exponentiation
    result = price ** 2;
    console.log("price ** 2 = " + result.toString());

    // Modulus
    result = price % 3;
    console.log("price % 3 = " + result.toString());

    // Increment
    result = price++;
    console.log("result = price++ = " + result.toString());
    console.log("price = " + price.toString());
    result = ++price;
    console.log("price = ++price = " + result.toString());

    // Decrement
    result = price--;
    console.log("price = --price = " + result.toString());
    console.log("price = " + price.toString());

    result = --price;
    console.log("price = -- price = " + result.toString());

}

mathSample();
console.log("// ####################")
/* ++value, value++, value--, --value etc...
When ythe ++ or -- is placed after the variable,
the current value of the variable is retrieved prior
to the increment or decrement */

// Plus sign with strings and numbers
/* If one of the operands is a string, then string
concatenation is performed */
/* The plus sign immediately prior to a string
variable converts that string to a numeric
data type if possible */

function plusSignSample() {
    let plusPrice = 200;
    let stringValue = "100";
    let result = 0;

    console.log("price = " + plusPrice.toString());
    console.log('stringValue = "100"');

    result = plusPrice + stringValue;
    console.log("result (number + stringValue) = " + result.toString());

    result = plusPrice + (+stringValue);
    console.log("result (number + (stringValue))" + result.toString());
}
plusSignSample();

console.log("// ####################")
// Assigment operators
/*
Equal            (=) = price =  10;
Addition        (+=) = price += 5;
Subtraction     (-=) = price -= 2;
Multiplication  (*=) = price *= 3
Division        (/=) = price /= 1.5;
Exponentiation (**=) = price **= 2;
Modulus         (%=) = price %= 3;
*/
function assigmentSample() {
    let priceAssigment = 200;
    
    console.log("price = " + priceAssigment.toString());

    // Addition
    priceAssigment += 100;
    console.log("price += 100 = " + priceAssigment.toString());

    // Subtraction
    priceAssigment -= 100;
    console.log("price -= 100 = " + priceAssigment.toString());

    // Multiplication
    priceAssigment *= 2
    console.log("price *= 2 = " + priceAssigment.toString());

    // Division
    priceAssigment /= 2;
    console.log("price /= 2 = " + priceAssigment.toString());

    // Exponentiation
    priceAssigment **= 2;
    console.log("price **= 2 = " + priceAssigment.toString());

    // Modulus
    priceAssigment %= 3;
    console.log("price =% 3 = " + priceAssigment.toString());
}
assigmentSample();
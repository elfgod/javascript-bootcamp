// ####################

/* 3. For/in and for/of Statement

- For/in statement
- For/of statement
- Break
- Continue
- Labeled statements

*/

// For/in statement

// Iterates over elements of object (properties and methods)
// Returns key (property / method) name
// object[key] returns value

/* Any object in JavaScript can use the dot notation
or an index to retrieve a value.

Example: product.productId or product["productId"]
*/

function forInSimple() {
    let product = {
        "productID": 001,
        "name": "Alien Head T-shirt AlienRoom",
        "productNumber": "TS-001",
        "color": "Black",
        "standardCost": 12,
        "listPrice": 25,
        calculateGrossProfit: function() {
            return this.listPrice - standardCost;
        }
    };    
    for (const key in product) {
        console.log("'" + key + "'=" + product[key])
    }
}
forInSimple();

// ####################
// For/of statement

// Iterates over values in array, string, etc
// Returns object of each iteration

/* The 'of' keyword keeps track of which item in the
array is currently being accessed */

/* JSON.stringify() is used a lot to emit an object
to the console. or to send it to a backEnd server */

    let product = {
        "productID": 001,
        "name": "Alien Head T-shirt AlienRoom",
        "productNumber": "TS-001",
        "color": "Black",
        "standardCost": 12,
        "listPrice": 25,
        calculateGrossProfit: function() {
            return this.listPrice - standardCost;
        }
    };

    let _products = [
        {
        "productID": 001,
        "name": "Alien Head T-shirt AlienRoom",
        "productNumber": "TS-001",
        "color": "Black",
        "standardCost": 1431,
        "listPrice": 25
        },
        {
        "productID": 002,
        "name": "Alien Head T-shirt AlienRoom",
        "productNumber": "TS-002",
        "color": "White",
        "standardCost": 34.99,
        "listPrice": 25
        },
        {
        "productID": 003,
        "name": "Alien Head T-shirt AlienRoom",
        "productNumber": "TS-003",
        "color": "Red",
        "standardCost": 13.08,
        "listPrice": 25
        },
        
    ];

function forOfSimple() {
    for (const item of _products) {
        console.log(JSON.stringify(_products));
    }
}
forOfSimple();

// Lopping over a string
function loopStringSample() {
    let productName = "AlienRoom Tshirt Alien Head, Black.";
    let letters = "";
    
    for (char of productName ) {
        letters += char;
    }
    console.log(letters);
}
loopStringSample();

// ####################
// Break, When used in a loop, the break statement goes to
// the line after the closing brace of the loop

function breakSample() {
    for (const item of _products) {
        if (item.standardCost < 20 ) {
            break;
        }
        console.log(JSON.stringify(item));
    } 
}
breakSample();

// ####################
// Continue, statement goes back to the loop, and increments
// the internal variable keeping track of which item is the current one

console.log("####################")

function continueSample() {
    for (const item of _products) {
        if (item.standardCost > 1000 ) {
            continue;
        }
        console.log(JSON.stringify(item));
    } 
}
continueSample();

// ####################
// Labeled statements
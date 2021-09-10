// ####################
/* Modules: Learn basics of javascript syntax and operators

- Switch statement
- For/in and for/of
- Math, comparison and logical operators
- Truthy and falsy
- Exception handling
- Data types
- 'this keyword
- The spread operator
*/

/* 1. All about the switch statement

- Simple Switch statement
- Multiple case statement and Forget a break
- Switch uses strict comparison
- Block-level scope issue with Switch statements
*/

// Simple Switch statement

function simpleSwitch(pId) {
    let productId = pId;

    switch(productId) {
        case 1:
            console.log('Product 1');
            break;
        case 2:
            console.log('Product 2');
            break;
        case 3:
            console.log('Product 3');
        default:
            console.log('Unknow product');
            break;
    }

}
simpleSwitch(1); // Product 1

// ####################
// ####################

/* 2. All about the switch statement

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
// if expression matches any case , then the statement(s) are executed

function multipleColors(color) {


    switch(color) {
        case "red":
        case "violet":
            console.log("The color is Red");
            break;
        case "blue":
        case "light-blue":
            console.log("The color is Blue");
            break;
        case "black":
        case "brown":
            console.log("The color is Dark");
            break;
        default:
            console.log("Unknown color");
            break;
    }
}
multipleColors("brown");

// ####################
// Block scope switch

function blockScopeSwitch(blockScopeId) {
    
    switch(blockScopeId) {
        case 1: {
            let message = "Case 1";
            console.log(message);
            break;}
        case 2: {
            let message = "Case 2";
            console.log(message);
            break;}
        case 3: {
            let message = "Case 3";
            console.log(message);
            break;}
        default: {
            let message = "Default Case";
            console.log(message);
            break; }
        }
}
blockScopeSwitch(3); // 3
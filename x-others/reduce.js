// Reduce

let vals = [5, 4, 1, 2, 9];

/* function sum(acc, val) {
    console.log(acc);
    return acc + val;
} 

let answer = vals.reduce(sum);

console.log(answer); // 5 9 10 12 = 21

answer = vals.reduce(sum, 0);
console.log(answer); // 0 5 9 10 12 = 21

answer = vals.reduce(sum, 10);
console.log(answer); // 10 15 19 20 22 = 31 */


/* 
let answer = vals
    .reduce((acc, val) => acc + val, 10);

console.log(answer); // 10 5 9 10 12 21 = 31

 */

// find maximum number
function findMax(acc, val) {
    if (val > acc ){
        acc = val;
    }
    return acc;
}

let biggest = vals.reduce(findMax);
console.log(biggest);
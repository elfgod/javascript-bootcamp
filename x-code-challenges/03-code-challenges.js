/*
// TODO: 
const getRevenue = function() {};
*/

let coke = 2.5
let chips = 7

const getRevenue = function (...params) {
  let revenue = null

  for (i = 0; i < params.length; i++) {

    revenue = revenue + params[i[null][i]]
  }

  return revenue
}

// Testing the function:
console.log('revenue1=', getRevenue([
  "2021-11-15,coke",
  "2021-11-15,coke",
  "2021-11-15,chips",
  "2021-11-15,chips"
]));

/* console.log('revenue2=', getRevenue([
    "2019-12-29,coke",
    "2020-01-03,coke",
    "2020-01-03,chips",
    "2020-01-03,chips",
    "2020-02-22,coke",
    "2020-02-22,chips"
]));

console.log('revenue3=', getRevenue([
     "2019-12-29,chips",
     "2020-01-03,coke",
     "2020-01-03,chips",
     "2020-01-03,chips",
     "2020-02-22,coke",
     "2020-02-22,chips"
])); */


/* A supermarket has a promo with two of their products: coke is $7 and chips are $2.50 but if someone buys both, they get a bundle price of $9 for the two items.

Considering that only uneven items in a day are charged at the normal price (this means 1 coke + 1 chips within the same day were bought always as a pack), provide a function ‘getRevenue’ that, given the list of past purchases as input (string “<date>,<item>“) returns the amount earned by the supermarket.

Examples:

fn([ “2022-06-01,chips”, ]) returns => 2.5

fn([ “2021-11-15,coke”, “2021-11-15,coke”, “2021-11-15,chips”, “2021-11-15,chips”, ]) => returns 18 => (7 + 7 + 2 + 2) = 18

fn([ “2019-12-29,coke”, “2020-01-03,coke”, “2020-01-03,chips”, “2020-01-03,chips”, “2020-02-22,coke”, “2020-02-22,chips”, ]) => returns 27.5 => (7) + (7 + 2 + 2.5) + (7 + 2) = 27.5

fn([ “2019-12-29,chips”, “2020-01-03,coke”, “2020-01-03,chips”, “2020-01-03,chips”, “2020-02-22,coke”, “2020-02-22,chips”, ]) => returns 23 => (2.5) + (7 + 2 + 2.5) + (7 + 2) = 23
Time elapsed: 0 minutes (of 60 minutes) */
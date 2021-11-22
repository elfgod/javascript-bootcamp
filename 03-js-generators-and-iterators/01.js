console.log("Example 1:");

function myIterator(start, finish) {
  let index = start;
  let count = 0;

  return {
    next() {
      let result
      if (index < finish) {
        result = { value: index, done: false };
        index += 1;
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      }
    }
  }
}

const it = myIterator(0, 10);

console.log("Using a While loop");
// Using a While loop
let res = it.next();
while(!res.done) {
  console.log(res.value)
    res = it.next()
}

const it2 = myIterator(0, 10);

// Using a standard For loop
console.log("Using a standard For loop");
for (let val, result; (result = it2.next()) && !result.done; ) {
  val = result.value;
  console.log(val);
}


console.log("\n");
console.log("##########");
console.log("Example 2:");

const arr = [0, 3, 7];

const it3 = arr[Symbol.iterator]();
console.log(it3.next()); // { value: 0, done: false }
console.log(it3.next()); // { value: 3, done: false }
console.log(it3.next()); // { value: 7, done: false }
console.log(it3.next()); // { value: undefined, done: true }

console.log("\n");
console.log("##########");
console.log("Example 3: Map");

// creates a new Map variable
const map = new Map();
// .set , to add a few keys and values
map.set("key1", "value 1");
map.set("key2", "value 2");
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value); // Array ["key1", "value 1"]
console.log(mapIterator.next().value); // Array ["key2", "value 2"]

// When you set a key and a value in a map
// They are stored as an array of key, value

console.log("\n");
console.log("##########");
console.log("Example 4:");
// this uses example 3 map data
// For/of loops uses the Symbol.Iterator method under the hood
// and returning the value of the next call on each iteration

for (const [key, value] of map) {
  console.log(`${key} and ${value}`);
}
// key1 and value 1
// key2 and value 2

console.log("\n");
console.log("##########");
console.log("Example 5: Set");

const set = new Set();
set.add('uno');
set.add('dos');

const setIterator = set[Symbol.iterator]();
console.log(setIterator.next()); // Object { value: "uno", done: "false" }
console.log(setIterator.next()); // Object { value: "dos", done: "false" }
console.log(setIterator.next()); // Object { value: undefined, done: true }

console.log("\n");
console.log("##########");
console.log("Example 6:");
// this uses example 5 set data
for (const value of set) {
  console.log(value); // uno, dos
}

console.log("\n");
console.log("##########");
console.log("Generator Function:");
/* Generator Function
A function that can be paused and resumed at a later time, while
having the ability to pass values to and from the function
at each pause point.
/*
function *timestampGenerator() {
  console.log(Date.now());
}
const itGen = timestampGenerator();
itGen.next() // comment this line for for(ItGen) to work

for(const val of itGen) {
  console.log(val);
}
*/

console.log("##########");

/* function *timestampGenerator() {
  console.log(Date.now());
  yield;
  console.log('execution continued');
}
const itGen = timestampGenerator();
itGen.next();
itGen.next(); */

console.log("##########");

/* Possible Yield Actions
Send a value to the iterator
- yield 'goes to iterator';
Receive a value from the iterator
- const x = yield; //
- it.next('value for x'); // => x is now 'value for x'
*/

console.log("##########");

function* timestampGenerator() {
  let ts = Date.now();
  console.log('original ts: ', ts);
  yield ts;
  console.log('boo')
  let additionalTime = yield;
  console.log('additionalTime', additionalTime);
  if (additionalTime) {
    ts = ts + additionalTime;
  }
  console.log('updated ts: ', ts);
}
const itGen = timestampGenerator();
const originalTimestamp = itGen.next();
console.log(originalTimestamp);
itGen.next();
itGen.next(1000 * 60);

console.log("\n");
console.log("##########");
console.log("Yield (func random number):");

function* randomNum() {
  while(true) {
    yield Math.floor(Math.random() * 100);
  }
}
const itRandomNum  = randomNum();
function getRandomNum() {
  return itRandomNum.next().value
}
console.log(getRandomNum());

console.log("\n");
console.log("##########");
console.log("Yield Delegation:");

/* Yield Delegation
Yield delegation essentially allows a host generator function
to control the iteration of a different generator function.
*/

function* gen1() {
  yield 1;
  yield 2;
  return 4
}

function* gen2() {
  const val = yield* gen1();
  yield 3
  yield val;
}

const itGenz = gen2();
console.log(itGenz.next());
console.log(itGenz.next());
console.log(itGenz.next());
console.log(itGenz.next());

/*
Generator Functions Include Return and Throw
No need to manually implement the 'return'
and 'throw methods
*/

/* iterator.return()
The return method ends a generator functions execution
*/

/* iterator.throw()
The throw method will end a generator functions execution while
also throwing an exception that can be handled by the generator
*/

/* generatorExampĺe.js
function* randomNumbers() {
  while(true) {
    yield Math.floor(Math.random() * 1000);
  }
}
const itRandomNumbers = randomNumbers();
itRandomNumbers.return(); // Valid
itRandomNumbers.throw(); // Valid
*/

console.log("\n");
console.log("##########");
console.log("Error handling and Early Completion:");

function* errorHandling() {
  try {
    yield 1;
    throw ('this is another error');
    yield 2
    yield 3;
  } catch (error) {
    console.log(error);
  }
}

const errorIt = errorHandling();
console.log(errorIt.next());
console.log(errorIt.next());
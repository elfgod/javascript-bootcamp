/* 
    Class 02
*/

// START ====================
// Objects and DOM @@@@@ //

/*
1.Object Properties and Methods
2.Passing Objects to Functions
3.Standard Built-in Objects
4.The Document Object Model(DOM)
5.Detecting Button Clicks
6.Showing and Hiding DOM Elements
7.Arrays in the DOM
*/

// NEWLINE ********************

console.log("1.Object Properties and Methods:");
console.log("\n");


console.log("let emtpyObject = { }")
let emtpyObject = { }; // empty object
console.log("\n");

// this is used to hide information
let mySymbol = Symbol();
console.log("let mySymbol = Symbol()")
console.log("\n");

let person = {
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation'
};

console.log("person.name : ", person.name);     // John
console.log("person.age : ", person.age);      // 32
console.log("person.partTime : ", person.partTime); // False

person.age = 18;
console.log("person.age = 18")
console.log("New person age : ", person.age); // 18
person['age'] = 21;
console.log("person['age'] = 21")
console.log("New person age : ", person.age); // 21

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("1.Methods:");
console.log("\n");

let personMethods = {
    name: "Josue",
    age: 15,
    partTime: true,
    showInfo: function(newAge) {
        console.log('In showInfo');
        console.log(this.name);
        console.log(this.name + ' is : ' + newAge);
    }
};

console.log("typeof personMethods.showInfo : ", typeof personMethods.showInfo);
console.log("\n");
// personMethods.showInfo();
personMethods.showInfo(999);
console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("2.Passing Objects to Functions:");
console.log("\n");
// passing by reference

let passingObject = {
    name: 'Elfgod',
    age: 34,
    partTime: true
}

incrementAge = (p) => {
    p.age++;
}

incrementAge( passingObject );
console.log("passingObject.age : ", passingObject.age);

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("3.Standard Built-in Objects:");
console.log("\n");

let now = new Date();
console.log("now.toDateString() : ", now.toDateString());
console.log("\n");

console.log(Math.abs(-42)); // 42
console.log("\n");

let s = 'Hello';
console.log("let s = 'Hello'");
console.log("s.charAt(0) : ", s.charAt(0)); // H
console.log("s.charAt(1) : ", s.charAt(1)); // e

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("4.The Document Object Model(DOM):");
console.log("\n");

function id1(message) {
    document.getElementById('id1')
        .textContent = message;
}
// this changes the dom h1 from id1 to Hello World
id1('this changes the <h1 id="id1">id1</h1> to all +  Hello World');

// change id1 font color with .style
const h2Title = document.getElementById('id2');

h2Title.style.color = 'red';
h2Title.style.fontWeight = '500';

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("5.Detecting Button Clicks:");
console.log("\n");

const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    console.log('click'); // shows click msg in the console
});

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("6.Showing and Hiding DOM Elements:");
console.log("\n");

const buttonReview = document.getElementById('see-review');

buttonReview.addEventListener('click', function() {
    const review = document.getElementById('review');

    if(review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        buttonReview.textContent = 'CLOSE REVIEW';
    } else {
        review.classList.add('d-none');
        buttonReview.textContent = 'SEE REVIEW';
    }
});

console.log("\n");
console.log("\n");
// NEWLINE ********************

console.log("7.Arrays in the DOM:");
console.log("\n");
// this loops all the classes called "container"
// this takes out container[0]

const containers =
    document.getElementsByClassName('container');
containers[0].classList.add('d-none');
console.log(containers);



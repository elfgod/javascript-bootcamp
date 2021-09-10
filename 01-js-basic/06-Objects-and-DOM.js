/* 9. Objects and DOM

- Object Properties and Methods
- Passing Objects to Functions
- Standard Built-in Objects
- The Document Object Model (DOM)
- Detecting Button Clicks

*/

// Object Properties

// empty object
let emtpyObject = { };

// this is used to hide information
let mySymbol = Symbol();

let person = {
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation'
};

console.log(person.name);     // John
console.log(person.age);      // 32
console.log(person.partTime); // False

person.age = 18;
console.log(person.age); // 18
person['age'] = 21;
console.log(person.age); // 21

// ####################
// Methods

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

console.log(typeof personMethods.showInfo);
// personMethods.showInfo();
personMethods.showInfo(999)

// ####################
// Passing Objects to Functions
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
console.log(passingObject.age);

// ####################
// Standard built-in Objects

let now = new Date();
console.log(now.toDateString());

console.log(Math.abs(-42)); // 42

let s = 'Hello';
console.log(s.charAt(0)); // H
console.log(s.charAt(1)); // e

// ####################
// The Document Object Model (DOM)

function id1(message) {
    document.getElementById('id1')
        .textContent = message;
}
// this changes the dom h1 from id1 to Hello word
id1('Hello');

// change id1 font color with .style
const h1Title = document.getElementById('id1');

h1Title.style.color = 'red';
h1Title.style.fontWeight = '100';

const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    console.log('click');
});


// ####################
// Showing and Hiding DOM Elements

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





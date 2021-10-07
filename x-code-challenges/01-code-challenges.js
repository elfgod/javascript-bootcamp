
/* Put your solution in the 'checkout' function below.
Feel free to create additional functions, objects,
pull in outside libraries, etc. */


//-------------------------------------------------------
// Part 1 - Basic shopping cart
//-------------------------------------------------------
// checkout({items: [["apple", 6], ["orange", 3], ["banana", 4]]}); 

checkout({
  items: [["apple", 6], ["orange", 3], ["banana", 4]],
  tax: "MO"})

function checkout(data) {

  let dataBase = {
      "apple" : 0.50,
      "orange" : 0.40,
      "banana" : 0.20,
      "strawberry" : 2
  }
  let tax = {
      "MO" : 1.225,
      "OR" : 0,
      "GA" : 4,
      "allOthers" : 2
  }

  console.log(data.items);

  console.log(data.items[0][0]);    
  console.log(data.items[0][1]);
  let apple = data.items[0][1] * dataBase.apple;
  apple = apple.toFixed(2);
  console.log(apple);

  console.log(data.items[1][0]);
  console.log(data.items[1][1]);
  let orange = data.items[1][1] * dataBase.orange;
  orange = orange.toFixed(2);
  console.log(orange);

  console.log(data.items[2][0]);
  console.log(data.items[2][1]);
  let banana = data.items[2][1] * dataBase.banana;
  banana = banana.toFixed(2);
  console.log(banana);

  total = parseFloat(apple) + parseFloat(orange) + parseFloat(banana);
  console.log(typeof total);
  // console.log(total.toFixed(2));

  total = total.toFixed(2)
  console.log(total)


  // ###############################
  
  console.log(data.tax);
  
  if (MO) {
      newTotal = (total * tax.MO) / 100;
  } else if (OR) {
      newTotal = (total * tax.OR) / 100;
  } else if (GA) {
      newTotal = (total * tax.GA) / 100;
  } else {
      newTotal = (total * tax.allOthers) / 100;
  }

}
  /* console.log(data.items[3][0]);
  console.log(data.items[3][1]);
  let strawberry = data.items[3][1] * dataBase.strawberry;
  strawberry = strawberry.toFixed(2);
  console.log(strawberry); */
  
  /*
  console.log(data.items[3][0]);


  switch(data) {
      case (data.items[0][0]):
          console.log("The fruit is apple");
          break;
      case (data.items[1][0] === "apple"):
          console.log("The fruit is orange");
          break;
      case (data.items[2][0] === "apple"):
          console.log("The fruit is banana");
          break;
      case (data.items[3][0] === "apple"):
          console.log("The fruit is strawberry");
          break;
      default:
          console.log("Unknown fruit");
          break;
  }
*/
  /* for (let i = 0; i < data.length; i++) {
      console.log(data.items[1][1]);
  } */



  // console.log(data.items[1][1]);
  // console.log(data[0][0]);

// Expected Result
// {subtotal: 5}



//-------------------------------------------------------
// Part 2 - Tax by location
//-------------------------------------------------------

/* checkout({
items: [["apple", 6], ["orange", 3], ["banana", 4]],
tax: "MO"
}); */

// Expected Result
// {
//   subtotal: 5, 
//   tax: 0.06     // rounded down from 0.0613 to 0.06
//   total: 5.06
// }


//-------------------------------------------------------
// Part 3 - discount code - 10% off discount code
//-------------------------------------------------------

/* checkout(
{items: [["apple", 6], ["orange", 3], ["banana", 4]],
 tax: "MO",
 discountCode: "tenpercentoff"
}
); */

// Expected Result
// {
//   subtotal: 5,
//   discount: 0.5
//   tax: 0.06     // rounded up from 0.0551 to 0.06
//   total: 4.56
// }

//-------------------------------------------------------
// Part 4 - discount code - 2 dollars off 5 dollar or more purchase
//-------------------------------------------------------

/* checkout(
{items: [["apple", 6], ["orange", 3], ["banana", 4]],
 tax: "MO",
 discountCode: "2dollarsoff"
}
); */

// Expected Result
// {
//   subtotal: 5,
//   discount: 2
//   tax: 0.04
//   total: 3.04
// }


//-------------------------------------------------------
// Part 5 - discount code - buy one, get one free
//-------------------------------------------------------

/* checkout(
{items: [["apple", 6], ["orange", 3], ["banana", 4]],
 tax: "MO",
 discountCode: "buyonegetonefree"
}
); */


// Expected Result
// {
//   subtotal: 5,
//   discount: 2.3
//   tax: 0.03    // rounded down from 0.0331 to 0.03
//   total: 2.73
//
// 

//-------------------------------------------------------
// Your Code Here
//-------------------------------------------------------




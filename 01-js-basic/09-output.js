/* 
    Class 02
*/

/*
1.document.Write()
2.window.alert()
3.console.log()
4.window.print()
*/

// START ====================
// fill this space @@@@@ //

console.log("1.document.Write():");
document.write("5 * 6 : ", 5 * 6);
document.write("<br>");
document.write("Hello, " + "My name is JavaScript");
// END ====================
console.log("\n");
// NEWLINE ********************

console.log("2.window.alert():");

window.alert(10 + 25);

alert("Hello World");

// END ====================
console.log("\n");
// NEWLINE ********************

console.log("3.console.log():");
console.log(`
Right click the browser page
+ click con inspect
+ click the console tab`);
// END ====================
console.log("\n");
// NEWLINE ********************s
console.log("4.window.print():");
// paste it in the index.html + click the button
// <button onclick="window.print()">Print this page</button>
console.log("\n");

document.write("<br>");

function warn(){
    console.log("function warn() : alert this is a warning message");
    document.write("function warn() : alert this is a warning message");
}

function getConfirmation(){
    let retVal = confirm("Do you want to continue?");
    if(retVal === true) {
        document.write("User wants to continue");
        console.log(retVal);
        return true;
    } else {
        document.write("User does not wants to continue");
        console.log(retVal);
        return false;
    }
    
}

function getValue(){
    let retVal = prompt("Enter your name:", "Your name here");
    document.write("You have entered : " + retVal);
}
// Shortest JS Program
// Empty File
//So do you know what happens we run the empty file
//JavaScript still creates the GEC , javascript engine also creates window
// window is like a big object with a lot of function and methods
// We can access all this and this is given by JS Engine
// this & window keyword
console.log(this); // window
// console.log(window); // window

//JS run's most of the places browser , nodejs , sever , mobile
// All these js engines to provide superpower this global keyword is created
// console.log(this == window); // true gives true in Browser console

//if we create variables and function in global space
//than it get attached to Global object ie windows

// Case 3️⃣: Node.js Environment (Important ⚠️)
// In Node.js:
// Global object is global, not window
// Top-level var is NOT attached to global
// Top-level this is {} (module.exports)
var x = 10;
console.log(x);
console.log(this.x); //In Browser console it shows 10 not in NodeJS 

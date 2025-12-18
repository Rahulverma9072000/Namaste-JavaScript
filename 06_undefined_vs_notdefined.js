// JavaScript is loosely typed langauge . Why ? It can changes the datatypes
// JavaScript does not attaches its variable to any datatype.

console.log(x); //Hoisting it shows undefined 
var x = 7;
//If we don't put any value than its allocated undefined 
var a;
if(a === undefined){
    console.log("a is undefined");
}
a = 10;
console.log(a);
a = "Hello World"; //See here we change the datatype of a 
console.log(a);

//Never do like this
a = undefined; //its like a bad thing in JavaScript
//Its not a good way to do this , because undefined is for different purposes . 
//undefined is meant for the purpose that variable is assigned a value or not . 
console.log(a); 

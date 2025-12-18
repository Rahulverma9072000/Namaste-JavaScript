//How function works in JS
//How function invocation works behind the scenes 

//Same variable name x 
var x = 1;
a();
b();
console.log(x);

function a() {
    //same variable name x 
    var x = 10;
    console.log(x);
}

function b() {
    //Using the same variable name x 
    var x = 100;
    console.log(x);
}

//Guess the output 
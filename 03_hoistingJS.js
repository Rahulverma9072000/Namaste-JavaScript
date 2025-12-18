//Learning Hoisiting in Javascript
//Hoisiting is a phenomena in JS where you can acess variables and function with even before initialising it
//We are trying to access getName() and x without initialising it
//Why it's happening
//Code Runs in Execution Context and it has 2 phases memory creation phase and Code Execution Phase
getName(); //Here Code Runs
console.log(getName); //Printing this function
console.log("x : ", x); //It gives undefined
console.log("getName 1 : ", getName1);
console.log("getName 2 : ", getName2);

//Calling arrow function before initialising
//It will give error like getName1 is not a function because till now it saves as a variable (undefined)
// getName1();
//Similarly like calling getName2 also same error 
getName2();

var x = 7;

function getName() {
    console.log("Hello LinkedIn");
}

//This happening because of Execution Context ,
//Even if we put debugger at line 1 than also getName and x is in the memory
//Even Before Code is Executed , Memory is allocated to variable and functions
//Because of Execution Context Memory Creation Phase where variables have

//We have some Arrow Function
//It behaves like a Variable
//In the memory allocation phase it allocates undefined like a variable .
var getName1 = () => {
    console.log("THis is Arrow Function");
};
//THis will also allocates undefined in the memory allocation phase and behaves just like a variable
var getName2 = function () {
    console.log("This is also a type of function");
};

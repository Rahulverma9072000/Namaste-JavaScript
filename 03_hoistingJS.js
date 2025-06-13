getName(); //Here Code Runs
console.log("x : ",x); //It gives undefined
console.log("getName 1 : " ,getName1);
console.log("getName 2 : " ,getName2);

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
//In the memory allocation phase it allocates undefined liek a variable . 
var getName1 = () => {
    console.log("THis is Arrow Function");
};
//THis will also allocates undefined in the memory allocation phase just like a variable 
var getName2 = function(){
    console.log("This is also a type of function");
}
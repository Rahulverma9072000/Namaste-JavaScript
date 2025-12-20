// let & const declarations are Hoisted
// Getting confused in the above statement
// Hoisiting means that using variables and functions even before initialising
// But for let & const it gives error so how they are Hoisted
// So yes they are also Hoisted They are hoisted to memory in a separate space and in case of var hoisted to memory attached to Global Object(Browser -> window object , b got attached to window object) , so if you try to use them before initialization → JavaScript throws an error. This special behavior is called the Temporal Dead Zone (TDZ).

// console.log(a); //It will give error : Cannot Access 'a' before initialization
console.log(b); //THis will not give error
let a = 10;
var b = 1000;
//Temporal Dead Zone :  Time Between let & const is hoisted to memory and assigned a value . Phase from hoisting till it assigns some value is TDZ .

//So In case of var it got attached to window objects (global in case of browsers ) 
// If we do global.b we can see the result , console.log(global.a) than it will not give that result bcoz its initialized in different memory. 


//const declaration behave similar to let in case of hoisting , but its more strict than let 
//We can't do like this
// const vr; // Syntax Error here const declaration must be initialized . (Syntax Error not even runs ) Missing initializer in const declatation .
// vr = 10;

const cnt = 10;
// cnt = 5; This will give type error assingment to constant variable . 
console.log(a);



// We have let , const , var which one to use , its suggested to use 
// const whenever possible (Very Strict use if u dont want to reassign anything )
// Use let as 2nd prio 
// dont use var , for special cases use var 

//Best Way to avoid TDZ is to always put the declaration , initialization on the top . So we can say that we have shrinking the TDZ to 0 . 



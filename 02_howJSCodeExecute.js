//Execution Context is creates in 2 phases : Memory Creation Phase and than Code
//First Phase : Memory Creation Phase , javascript will allocate memory to all functions and variables
console.log(n);
// console.log(b); Give Error 
let b = 3;
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var res = square(n);
// So for First Phase Memory Creation Phase
//It allocates memory to functions and Variable
// n : undefined
// square : (whole function is stored here)
// square2 : undefined
// square4 : undefined

// 2nd Phase : Code Execution Phase
//JS Code runs through the program line by line
// First line : var n = 2 (Till now value of n is undefined now it becomes 2)
// Line 2 to 5 (function) nothing to do here
// Line 6 : var square2 = square(n) Function invocation happens so here brand new Execution Context is created
// So again inside the function a new execution context is created
// Line 1 of function : function square(num) {  here num is assigned value undefined in Phase 1
// var ans = num * num ; ans is assigned undefined in Phase 1
// return ans ;
// Phase 2 will be Code Execution Phase will be executed of the function
// num = 2 happens in line 1 of function
// ans = 4
// return ans; // reutrn the value of ans to where the line of control

//JS Manages Execution Context deletion , addition handles with a Call Stack
//Bottom of stack we have our Global Execution Context

//When a Program start Running Global Execution Context is pushed into the stack
//Whenver new function is called a new Execution Context created and pushed into an stack
//After all Execution Context is completed than our program ends.

// Call Stack maintains the order of execution of Execution Contexts . 

// Call Stack is also known as many names
// Execution Context Stack ,  Program Stack , Control Stack , Runtime Stack , Machine Stack

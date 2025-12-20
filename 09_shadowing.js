//Shadowing in JS
var a = 100;
{
    var a = 10; // this a is shadowing the top var a
    console.log(a);
}
console.log(a); //also modified the value of a

//Both will be 10 . Why ?
// becuase both are pointing to the same memory location
// a is present in the global scope not in block scope so same memory location is accessed and changed that's why both of them give result 10 .

//Not in the case of let , const
// because
let b = 20; // this one have different scope
{
    let b = 30; // this b has block scope
    console.log(b);
}
console.log(b);

//Shadowing is not just Block , function also behaves the same way
const c = 100;
function x() {
    var c = 30;
    console.log(c);
}
x();
console.log(c);

// Shadowing happens when a variable declared in an inner scope has the same name as a variable in the outer scope.

//Illegal Shadowing 
let a = 20;
{
    var a = 20; //Syntax Error 
}
//We cannot do this , Error is a is already declared 
//Why Illegal ? It should not cross the boundary of the scope , let cannot be redeclared
// ❌ Why illegal?

// Because:
// let a → block scoped
// var a → tries to become function/global scoped
// When var a is declared inside block, it escapes the block (because var is NOT block-scoped).
// Therefore it tries to redeclare the same variable in the same scope → conflict.
// JavaScript engine stops this → Syntax Error.





//var is a functionscoped now it will not throw error now 
// Because var just have function scope ,
let a = 20;
function x(){
    var a = 100;
}

//We can shadow let using let 
let a = 10;
{
    let a = 30; //Because 
}


//Can We shadow like this 
//Yes Its Perfectly Fine 
var a = 200;
{
    let a = 20; //This is perfectly valid 

}
// ✔ Why valid?
// var a → function/global scoped
// let a → block scoped
// Both variables exist in different scopes, so no conflict.



//Block Scope also follows Lexical Scope 
//It follows Lexical scope chain Pattern 
const a = 100;
{
    const a = 100;
    {
        const a = 300;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
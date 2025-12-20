//Block Scope and Shadowing in JS
//This is a valid Block in JS
{
    //Compound Statement : Combining Multiple JS statement into a group
    //Why We need to group multiple statement ?
    // We group the multiple statement to JS where it expects a single statement
    var a = 11;
    console.log(a);
}

if (true)
    //if we want to add multiple statement than we have to use block , bcoz JS expects single statements here
    true;


// What is Block Scope
// What variable and function we can acess inside this block

{
    var a = 10;
    let b = 20;
    const c = 30;
}
//So intresting thing is b and c are hoisted and inside the block scope (ie different memory space that is reserved for this block) 
// and a is hoisted inside the Global Scope
//That's why it's said let and const are in block scope 
// So after this block finishes let and const memory vanishes 
//whereas var can be accessible after the block ends 
console.log(a);
console.log(b); // Give Reference Error
console.log(c); // Give Reference Error 


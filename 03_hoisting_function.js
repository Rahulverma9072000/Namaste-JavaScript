//Doubt_1 : Why Hello got printed , when there is error in the code
//Answer is this is the RunTime Error , So its because of Execution Phase .
//Functions in JS are fully hoisted
//Memory Creation Phase : It stores the function and since no x is there so did not store
//Code Execution Phase : It runs the function but did not find x so it gives error .
getName();
console.log(x);
function getName() {
    console.log("Hello ");
}

// Functions are hoisted fully
// Variables are hoisted partially
// Undeclared variables don’t exist → runtime crash

// Why Function is fully hoisted ?
// ⚠️ Critical difference (THIS is the answer)
// Feature	         Function Declaration	  Variable (var)
// Name hoisted	      ✅	                      ✅
// Value hoisted	  ✅ (entire function)     ❌ (undefined)
// Usable beforeline  ✅	                      ❌ (logic bug)


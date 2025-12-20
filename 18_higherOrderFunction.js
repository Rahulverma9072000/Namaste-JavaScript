//Higher Order Function : A Function Which takes another function as an argument or returns a function from it is known as higher Order Function .

//Function which is passed into HOF called Callback function 
function x() {
    console.log("Namaste");
}

//This function y here which takes another function x as an argument is known as Higher Order Function .
function y(x) {
    x();
}

//Functional Programming :

//Normal Peoples Write in an interviews 
//Task 1 : We have an radius array where we have to find Area of all Circles
const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

// Task 2 : Calculate Circumfrence of the Circle 
const calculateCircumference = function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2*Math.PI * radius[i]);
    }
    return output;
}
const calculateDiameter = function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2* radius[i]);
    }
    return output;
}



//Function written above is written by Normal People that's actually a not a good way to write code in the interviews 
//There is a principle in Software Engineering : DRY Principle (Do Not Repeat Yourself)
// You realized:
// 👉 Only the formula changes, but the looping logic is same.
// So in above 3 function we are doing the repetitive task just the core logic changes rest everything is the same thing 

//Now I will write the function that is actually done by Players 

//We can just write the area , circumfrence , diameter logic 
const area = function(radius){
    return Math.PI*radius*radius;
};

const circumfrence = function(radius){
    return 2*Math.PI*radius;
};

const diameter = function(radius){
    return 2*radius;
};

//We abstracted the logic out 
// Generic Higher-Order Function , taking logic function as an argument 
const calculate = function(radius,logic){
    const output = [];
    for(let i = 0;i < radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

//So here we just have to change the logic and our work is done 
//we don't have to write the same code again to find circumfrence , diameter 
console.log(calculate(radius,area));
console.log(calculate(radius,circumfrence));
console.log(calculate(radius,diameter));


//calculate function is actually same as that of the map function 
console.log(radius.map(area));
//Now if you see its syntax is like radius.map and our calculate is taking radius as argument so how to do it similar Array.prototype

//this over here refers to radius 
Array.prototype.calculate1 = function(logic){
    const output = [];
    for(let i = 0;i < this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate1(area));


//Important Term 
//Functions are First Class citizens in JavaScript and because of this we can use HOF 

// ✅ Functions are treated like normal values (objects)

// Just like numbers, strings, arrays, or objects—functions can be:
// 1️⃣ Stored in variables
// 2️⃣ Passed as arguments to other functions
// 3️⃣ Returned from functions
// 4️⃣ Stored in data structures (arrays, objects)
// 5️⃣ Assigned with properties
// 6️⃣ Created dynamically

// Because JavaScript treats functions like values, they get full rights → hence first-class citizens

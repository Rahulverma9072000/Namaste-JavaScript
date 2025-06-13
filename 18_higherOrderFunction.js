//Higher Order Function : A Function Which takes another function as an argument or returns a function from it is known as higher Order Function .

function x() {
    console.log("Namaste");
}

function y(x) {
    x();
}

//Functional Programming :

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
//So in above 3 function we are doing the repetitive task just the core logic changes rest everything is the same thing 

//Now I will write the function that is actually done by Players 

const area = function(radius){
    return Math.PI*radius*radius;
};

const circumfrence = function(radius){
    return 2*Math.PI*radius;
};

const diameter = function(radius){
    return 2*radius;
};

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
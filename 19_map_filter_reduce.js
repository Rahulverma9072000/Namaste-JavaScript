// Map , Filter and Reduce

const arr = [5, 1, 3, 2, 6];
//map is used to transform the array
//Double the array
function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
const output = arr.map(double);
//We can pass the function directly
console.log(
    arr.map(function binary(x) {
        return x.toString(2);
    })
);
//We can pass arrow function as well
const output1 = arr.map((x) => x.toString(2));
console.log(output1);

//Filter function is used to filter the values inside the array .

//Example : Filter out all the odd elements in the array
console.log(
    arr.filter(function isOdd(x) {
        return x & 1;
    })
);

console.log(
    arr.filter(function greaterThan4(x) {
        return x > 4;
    })
);

console.log(arr.filter((x) => x < 3));

//reduce function
//sum or max

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));
//How we can transform the logic and use reduce
//                                     accumulator , current
// const output2 = arr.reduce(function (acc,curr){

// });

const output_2 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output_2);

//Find the maximum element in the array
const output_3 = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(output_3);

//Array of objects

const users = [
    { firstName: "Rahul", lastName: "Verma", age: 25 },
    { firstName: "Tom", lastName: "Verma", age: 25 },
    { firstName: "Deepak", lastName: "Verma", age: 24 },
];

//list of full names
const fullNames = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullNames);

//How many peoples of particular age
const userAge = users.reduce(function (age, curr) {
    if (age[curr.age]) {
        age[curr.age] += 1;
    } else {
        age[curr.age] = 1;
    }
    return age;
}, {}); // initial value will be empty object
console.log(userAge);

//Find out the firstName of all the people whose age is less than 30
//We can chain the map , filter , reduce also 
//Important Chaining of these Methods 
const output_4 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output_4);

//HomeWork Problem 
//Ww can do this using reduce 
const output_5 = users.reduce(function(user,curr){
    if(curr.age < 30){
        user.push(curr.firstName);
    }
    return user;
},[]);
console.log(output_5);

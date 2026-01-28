function x(){
    var i = 1;
    setTimeout(function (){
        console.log(i);
    },3000);
    console.log("This should Print After 3 sec");
}

// x();


//Tricky Question JS interviews 
//Make a program where it wait for 1 sec print 1 
// wait for 2 sec than print 2 and so on till 5 
function y(){
    for(var i = 1;i <= 5;i ++){
        setTimeout(function(){
            console.log(i);
        },i * 1000);
    }
    console.log("Namaste Javascript");
}
// y();
//What can be the output ? 
// 6 6 6 6 6 Why ? bcoz var is function scope 
// And if we use let than 1 2 3 4 5 will print 

//To increase complexity 
// Use only var and make the result like 1 2 3 4 5 

// 🧠 One-liner to remember

// Function parameters are local variables created per function call — they are not var or let.

function z(){
    for(var i = 1;i <= 5;i ++){
        function close(x){
            setTimeout(function (){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
}
z();
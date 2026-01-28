// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z,typeof(z));
// //Not just the function code is returned 
// //but the whole closure is returned ie function + lexical scope 
// z();


function z(){
    var b = 100;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();


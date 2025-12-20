//Scopes : Where you can access a specific variable and function . 
//Scope is directly dependent on the lexical environment .

//Lexical means in hierarchy or in sequence 
//Whenever Execution Context is created Lexical Environment also creates. 
//Lexical Environment is the local memory + reference of lexical environment of its lexical parents (where actual memory place of parent) .

//This way and mechanism to find out the variable is called ScopeChain .

function a() {
    //Can we access b inside a ?
    //First JS Engine will find b in a's Local memory
    //If not found , than it will look 
    console.log(b); 
    function c() {
        console.log(b);
    }
    c();
}

a();
var b = 10;

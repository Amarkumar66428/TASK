let a = prompt("Enter first value");
let b = prompt("Enter second value");
sumDouble(a,b)
function sumDouble(a,b){
    if(a===b){
        console.log(2 * ( a + b ));
    }
    else{
        console.log( a + b );
    }
}

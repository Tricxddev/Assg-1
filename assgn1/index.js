//A JavaScript function that takes a number as input.
 
//If the number is even, the function should return "Even." 
//If the number is odd, the function should return "Odd."

function detectNum(x)  { 
if(x % 2 == 0){
console.log("This number is EVEN")
} else{
    console.log("This number is ODD")
}
}
// Enter desired Digit below
let x = 48
console.log(detectNum(x))
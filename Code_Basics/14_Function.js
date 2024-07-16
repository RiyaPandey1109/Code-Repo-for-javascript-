// Function in Javascript
//Understanding the scope of function.

function setName(){
    console.log("Hii")
}
// setName :- reference of funnction
// calling a function setName();

function logininUserMessage(username){
    if(!username){
        console.log("PLease eneter a username")
        return
    }
    return `${username} just logged in` 
}

// console.log(logininUserMessage("Riya"));
console.log(logininUserMessage());

// Rest Operators important point for interview  :- 
function calculatecartPrince(...num1){ 
     return num1

}
 // We can pass as many as arguments we need to pass in the function because of Rest Operators
console.log(calculatecartPrince(1,2,3,4));


// Handling Objects as a parameter in the function 
// We can also pass array as a parameter in the function.





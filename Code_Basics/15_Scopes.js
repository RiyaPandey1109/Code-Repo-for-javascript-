



// Brakets define the scope
// {

// }

if(true) {
 let a = 10;
 const b= 20;
 var c = 30

}

// console.log(a);
// console.log(b);
//console.log(c);
// Go through concepts of scope once
// ***************** Interesting case ******************** //
addone(2);
function addone(num){
    return num+1;

}
addTwo(2);
const addTwo = function addTwo(num){
    return num+2
}

// const user={
//     username:"Riya",
//     prince:999,

//     welcomemassage: function(){
//         console.log(`${this.username}Welcom to website `)
//         console.log(this);
//     }

// }
// // this refers to the current context 
// user.welcomemassage();
// user.username="Prince"
// user.welcomemassage();
// console.log(this);
// // we are in the node environment so its refering to an empty object

// function chai() {
//     console.log(this);
// }
// chai();

// const chai1 = function(){
//     console.log(this);
// }
// chai1();
// const chai = ()=>{

// }

const adnumber=(num1,num2)=>{
    return num1+num2;
}
//implict return we dont use curly braces , if we use curly braces we will have to add the use return keyword
// important because this is needed while using react.
const addnumber=(num1,num2)=>( num1 + num2);
console.log(addnumber(2,3));
// returning an object
const arrinobj=(num)=>({username:"Riya"});

//Immediately Invoked funtion Expressions (IIFE) 
(function add(nume){
    console.log('DB connect');

})(1);
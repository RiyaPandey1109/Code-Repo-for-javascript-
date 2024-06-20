// ON the basis of how a data is kept in the memory and how it is accessed the Data types are categorized into Two Parts
//Primitive and Non Primitve or Reference Type
//Primitve :- 7 types 
//1. String :- IF any changes is to be made it is made to the copy of that  data
// NUmber , Boolean , null , undefined , Symbol(to make data unique), BigInt



// Javascript is staticly typed or Dynamically type


const score= 100;

const scoreValue =100.3 ; // there is no decimal in javascript its only 

//Symbol is used to assign unique value 
const id = Symbol('123'); 
const anotherId=Symbol('123');

console.log(id === anotherId);
const Number1=10;
const Number2=10;


console.log(Number1==Number2);

// whereas in typescript
//const score : number = false;

// reference type or Non primitve data type (we are directly allocated with the reference of that data form the memory unlike in Primitive data type)
// 1.Array , Objects , Functions  

const heroes=["Shaktiman", "naagara", "doga"];
let myobj= {
    name:"Riya",
    age:22,

}

const myFunction=function(){

    console.log("hello World");

}

// To find the type of the data 

console.log(typeof scoreValue);

// For interview purpose make sure u read about the typeof every data
// say typeof(null) == object

// Read on website called ECMAstandard 




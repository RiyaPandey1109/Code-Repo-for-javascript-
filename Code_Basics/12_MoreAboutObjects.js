// Singlton object 
const tinderUser= new Object()

// Nested Objects 
// objects concatenation or merging objects 
// using OObjects Assign
// mdn documentation.
// Spread ooerator .... // same concepts as array to merge we will use spread

const users=[
    {
        id:1,
        email: "Riya.pandey.cse"
    },
    {

    }
    
]
/**** important and interesting */
// methods on Objetcs :- keys of all objetcs
// Console.log(Onject.keys(tinderuser));
// Here we will get the array of all the keys 
// Console.log(Onject.values(tinderuser));
// Console.log(Onject.Enteries(tinderuser));
const regularuse ={
    email:"some@gmail.com",
    fullname : {
        firstname : "Riya",
        Secondname : "pandey"
    }

}
console.log(regularuse);
console.log(regularuse .fullname.Secondname);
// IN THIS way we can acces the Objects.
console.log(Object.keys(regularuse));


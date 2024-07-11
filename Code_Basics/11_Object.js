// Objects :- are created by using literals and constructora
// When made with constuctors it is singleton.
//Object . create 
// Object litterals

const mysym = Symbol("key1") // ?
const Jsuser={
    name:"Riya",
    // Accesing symbol remeber this isasked in interviews.
    [mysym]:"mykey1",
    "full name" :'Riya Pandey',
    age: 16,
    email:"riyapandey.cse.2021"
} 
//accesing objects
console.log(Jsuser.age);
// another way to access the objects
console.log(Jsuser["full name"]);
//Object.freeze(Jsuser) // we wont be able to update the value
console.log(Jsuser);

Jsuser.greeting = function (){
    console.log("Heloo Riya");
}
Jsuser.greetingTwo= function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting); // Function return nhi hua hai bas reference aya hai
console.log(Jsuser.greetingTwo());








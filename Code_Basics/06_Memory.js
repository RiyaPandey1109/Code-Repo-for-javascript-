// Memory Allocation 

// Two types of memory Stack memory and Heap Memory

// For primitive Data Type we use stack memory [LIFO ][It gives copy]
let Myidname="Riya11.__";
let Newaccount=Myidname;

Newaccount="riyapandey.cse";

console.log(Myidname);
console.log(Newaccount);

// For Non Primitive Data Type we use Heap memory

let UserOne ={
    email:"riyapandey.cse",
    name:"riya"

}

let userTwo = UserOne ;

userTwo.email = "riyapandey.cse.2021";

console.log(userTwo.email);
console.log(UserOne.email);


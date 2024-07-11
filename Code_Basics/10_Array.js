// Array in Javascript 

const myArr=[0,1,2,3,4,5]

// console.log(myArr[0])

//  Array Shares Shallow copy. (shallow copy is the copy whoes prorperties shares the same reference points).
// whereas deep copy is the one where after copying they dont share the same reference points.
// Arrays give protoype access.
// Array methods :- , push , unshift , 
// unshift is not for optimization as it adds the value at end , but in some secenriones it can be used


// important methods L- Slice and Splice 
console.log ( " A",  myArr);
const myn1= myArr.slice(1,3);
console.log(myn1);

console.log("B" , myArr);
const myn2= myArr.splice(1,3);
console.log(myn2);

console.log("c" , myArr);
// Splice make changes in original array whereas slice 
// Differnce between splice and slice asked in interview

// Array for react and Nodejs

// push and concat :- by using push 

//const all_new_heros = [...marvel_heroes , ...myArr.dc_heros]
// Spread and Flat 



// Data Scrapping  :- when we take the data from different websites.
// there might be the case we get the data in different forms hence we can conver them into array 

console.log(Array.isArray("rIYA"));
console.log(Array.from("rIYA"));
//interesting case for intervies 

console.log(Array.from({name:"hitesh"} )) 
// .of method 
// Array.of
//Array .isarray
//Array.from







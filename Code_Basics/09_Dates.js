// Dates. :- thodsa pain point hai

 
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());
console.log(myCreateDate);
let myCreateDate1= new Date(2023,0,23,5,3);
console.log(myCreateDate1.toLocaleDateString());
let myCreateDate2= new Date("2023-01-14");
console.log(myCreateDate1.toLocaleDateString());
// General way to write the date in India is 10-04-2023
let myCreateDate3= new Date("01-14-2023");

let myTimeStamp= Date.now()
console.log(myTimeStamp);
// IF we want to convert this into second
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`
newDate.toLocaleString('default' , {
    weekday:"long"
} )



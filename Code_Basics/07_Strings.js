const name="Riya";
console.log(name);

const repocount=50;

// This is not a standard way to concataenation
console.log(name+ repocount +"Value");
//this is called string interpolation.
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
// One more way to declare the string

const gameName=new String('Riya');
console.log(gameName[0]);
// String acts as an object it has key and value paise so it is like '0:R , 1:i...........';
//There are n numbers of method for string 
console.log(gameName.__proto__); //****** ?  */
console.log(gameName.length);
console.log(gameName.toUpperCase()); // original value will not be changed as it is a primitive data type and it uses stack hence string is not mutable.

console.log(gameName.charAt(2));

console.log(gameName.indexOf('y'));

const newString= gameName.substring(0,2); // last value is not included.
console.log(newString);

const reversstring= gameName.slice(-4,1);
console.log(reversstring)

const newStringOne= "    riya  ";
// usually while giving input there might be a chance that user added some spaces so to remove thode spaces we use trim function.
console.log(newStringOne);
console.log(newStringOne.trim());
// there is trim start and trim end as well.
  
const url = "https:riya//.  com/hitesh";

console.log(url.replace('%20','__'));

console.log (url.includes(url.includes('riya')));

// Split method we will. split(sperator, limit);

console.log(url.split(" "));





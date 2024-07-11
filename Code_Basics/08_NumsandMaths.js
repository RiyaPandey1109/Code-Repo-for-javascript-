//Nums and Maths.
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // While making any e-commerce website there might be the case that we are using some precision values
// and then our precision values kuch jyda he badi hojati hai to ase cases mai we use tofixed to fix the decimal point precision.

const otherNumber = 23.2292

console.log(otherNumber.toPrecision(2)) // revisit this beacause this is interesting.

const hundered = 100000000;
console.log(hundered.toLocaleString('en-IN'));

// ++++++++++++ MATHS +++++++++++++++++++++ //

console.log(Math);
// to get positive values we use abs
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.floor(4.6));
console.log(Math.pow(2,3));

// most frequently used method is math.random
// It will always print value between 0 and  1.
console.log(Math.random());
console.log((Math.random()*10)  +1 );

const min = 0;
const max= 6;
// generic formula 
 
console.log (Math.floor(Math.random() * (max-min + 1))+ min )






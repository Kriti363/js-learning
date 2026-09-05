// Number-:

const score = 400
console.log(score);          // 400

// I am defining new object which is of type Number,
// Also while running the same thing on console, we can see the properties of Number available through prototype.

const balance = new Number(100)  
console.log(balance);      // [Number: 100]

// We will make it to String, then we get additional properties;

console.log(balance.toString());           // 400
console.log(balance.toString().length);   //  3

// Fixed property;
// Mostly use (2) Fixed for application.
console.log(balance.toFixed(2));       // 100.00    

// Precision property;
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// Number of significant digits, must be in the range 1 - 21, inclusive.
// Priority is getting before the decimal.

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));           // 23.9

const otherNumbers = 123.8966
console.log(otherNumbers.toPrecision(3));       // 124

const otherNumbers1 = 1123.8966
console.log(otherNumbers1.toPrecision(3));   // 1.12e+3

// Locale String property;
// Helps in bifurcating the number.
// Usually by default US standard.
 
const hundreds = 1000000
console.log(hundreds.toLocaleString());   // 1,000,000

// For converting to Indian value;

console.log(hundreds.toLocaleString('en-IN'));   // 10,00,000


// Also if you go on console and check the properties of the datatype Number, you'll get a lot of properties attached with it.
// Example-: 1) MIN_VALUE  2) MAX_VALUE  and many more...



// +++++++++++ Math +++++++++++



// The Math library come default with Js (a very powerful and interesting library)

console.log(Math);    // Object [Math] {}  

// Math-: An intrinsic object that provides basic mathematics functionality and constants. Which you can check on console.


// Absolute value (abs);
// Returns the absolute value of a number (the value without regard to whether it is positive or negative).For example, the absolute value of -5 is the same as the absolute value of 5.

console.log(Math.abs(-4));          // 4

// Round value-: Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.round(4.3));   // 4

// Ceil-: Returns the top value.

console.log(Math.ceil(4.2));   // 5

// Floor value-: Returns the down value.

console.log(Math.floor(4.9));  // 5

// Likewise there are many other methods as well, which can be easily checked on the console.

// min-: If you want to find out the lowest vlaue in the array.

console.log(Math.min(4, 3, 6, 8));   // 3

// max-: If you want to find out the largest vlaue in the array.

console.log(Math.max(4, 3, 6, 8));   // 8

// The most used library is Math.random-: The value comes a pseudorandom number between 0 and 1.

console.log(Math.random());              // Value between 0 and 1
console.log(Math.random()*10);    //  Value between 0 and 9, values shift to left
console.log((Math.random()*10) + 1);   //   Value won't ever be 0
console.log(Math.floor(Math.random()*10) + 1);    // To get only one digit

// Trick-: To get value within a specific range, we have a generic syntax formula;

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Here, (max - min) for the range and ( + 1 ) for avoiding zero and for avoiding the only minimum value we add ( + min ).
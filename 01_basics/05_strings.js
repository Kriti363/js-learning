// String can be written using both "" and '' in Js.

const name = "kriti" 
// Here also behind the scene it is envoking the object only for declaring the String.
const repoCount = 50

console.log(name + repoCount + " Value");

// But this is to old method of writing, now we use [back text]. 
// Advantage of back text is that, here comes interpolation - here we create place holders, we can directly inject the variable present their. 
// Symbol of injecting any variable is ${}

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way of declaring a string;

const gameName = new String('kriti-s')

// By using the new keyword we are using the objects of Js.
// Here, kritis is written inside the constructor of the String.

// How to access key value pairs?

console.log(gameName[0]);   // k

// How to access the prototype?

console.log(gameName.__proto__);  // {}

// That object {} is not empty, the easiest way to access its methods is by checking it on console.

// Now lets learn to access some methods,

console.log(gameName.length);  // 6
console.log(gameName.toUpperCase()); //KRITIS

// To check which character is at which position,

console.log(gameName.charAt(2));  // i

// To check which position does the character has,

console.log(gameName.indexOf('s'));  // 5

// Now we want to divide the String into substring,

const newString =  gameName.substring(0, 4)
console.log(newString);  // krit

// Now to want to slice the String, 
// In slice we can give negative values too.

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);  // rit

// Using trim method,
// It removes the starting space and ending space.

const newStringOne = "   kriti   "
console.log(newStringOne);           //   kriti   
console.log(newStringOne.trim());   //kriti

// Using replace method,

const url = "https://kriti.com/kriti%20kriti"
console.log(url.replace('%20', '-'));    // https://kriti.com/kriti-kriti

// We can also ask some questions to the String,

console.log(url.includes('kriti'));     // true
console.log(url.includes('space'));    //  false

// Now i want to convert this String into a array,
// I want the value to split based on dash (can be space, dash or anything)
// For all this we have a method split.
// Syntax = split(separator, limit)

console.log(gameName.split('-'));   // [ 'kriti', 's' ] we got an array

// There are many other several methods of String, go on and search them on MDM and on the console.
// Also use the `back text` syntax.
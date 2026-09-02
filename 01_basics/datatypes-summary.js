// Datatypes: 1) Primitive  2) Non-Primitive
// Differences is done on the basis of: 1) How data is stored in the memory.  2) How can you access the data.


// 1) Primitve Datatypes:
// Call by value - means whenever you copy them from one place to another, their original data is not given to you as a reference in the memory. Their copy is given to you and whatever changes you do is done in the copy.
// These have 7 categories:
// 1) String 
// 2) Number 
// 3) Boolean 
// 4) null [means completely empty] 
// 5) undefined 
// 6) Symbol [used to make any value unique] 
// 7) BigInt [some scientific value or very big values]




// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100            // Number type
const scoreValue = 100.3    //  Number type

const isLoggedIn = false  //    Boolean type 
const outsideTemp = null
let userEmail;

const id = Symbol('123')   // Symbol datatype
const anotherId = Symbol('123')
// Both are different, not same value
console.log(id === anotherId);

const bigNumber = 23565623456932263n    //BigInt Number




// 2) Non-Primitive Datatypes(Reference type):
// All these values are those whose reference can be allocated to you directly in the memory
// Types:
// 1) Array
// 2) Objects
// 3) Functions

const heroes = ["spiderman", "hulk", "eleven"];
// objects are inside curly braces (values are in key pairs)
let myObj = {
    name: "kriti",
    age: 23,
}

// definition of function -> function(){}
const myFunction = function(){
    console.log("Hello");
}



// How to find out the datatype of any value: by the use of the keyword [typeof]
console.log(typeof bigNumber);        // false
console.log(typeof outsideTemp);     //  object
console.log(typeof scoreValue);     //   number
console.log(typeof myFunction);    //    function (object function)
console.log(typeof heroes);
console.log(typeof anotherId);
// Non-Primitve datatypes datatypes is always an object
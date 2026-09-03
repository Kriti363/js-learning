// Memory are of two type:
// 1) Stack Memory
// 2) Heap Memory

// Stack Memory is used in Primitve datatypes- You get a copy of the variable you have declared.
// Heap Memory is used in Non-Primitive datatypes- You get a referrence of the original value. Any change you make will change the original value.


// Example of Stack

let myYoutubename = "kritidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);   //chaiaurcode
console.log(myYoutubename);//kritidotcom 

// Because when anothername was assigned myYoutubename then it was given a copy of myYoutubename and changes were made into it. Therefore, the value of myYoutubename remains kritidotcom.


// Example of Heap;

let userOne = {
    email: "ks@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ss@google.com"

console.log(userOne.email);             
// ss@google.com
console.log(userTwo.email);
// ss@google.com


// While accessing in an object we use the dot and the value we want to access. Example(userTwo.email).
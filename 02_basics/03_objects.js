// Objects-:

// There are two ways to declare objects;
// 1) Literal
// 2) Constructor

// singleton- Whenever you make any constructor using singleton, then comes singleton as an object. It is an object of it's kind.
// But when you create it in a different way then it is not a singleton, multiple instances of it are created.

// Whenever we actually declare them like literals then singleton is not created.
// But always a singleton when created by constructor.


// Object.create-:     
// Creates an object that has the specified prototype or that has null prototype.
// This is also called a constructor method, within this a singleton is created.


// Object literals->

// Let's declare an object and give values;
// In objects we have key value pairs.
// By default the system processes name as a String, in which we can give any kind of value.


// How to access the object?

// There are two ways,
// 1) To access with dot (.) notation // JsUser.email (Here it by default treats it as String)
// 2) By- JsUser["email"]  // "" necessary as we need to tell that it is a string. Important cause values like "full name": "Kriti Srivastava" can't be accessed using dot notation.

// We have a unique datatype in within primitive datatypes, known as "Symbol".
// Returns a new unique Symbol value.

// How to declare Symbol or use it as a key?
// Question asked- Take a symbol, add it to the object keys and print it.

// Syntax []. Example [mySym]: "mykeys1"

const mySym = Symbol("key1")

const JsUser = {
    name: "Kriti",
    "full name": "Kriti Srivastava",
    [mySym]: "mykeys1",
    age: 18,
    location: "Lucknow",
    email: "kriti363@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
}

console.log(JsUser.email);             // kriti363@gmail.com
console.log(JsUser["email"]);         //  kriti363@gmail.com
console.log(JsUser["full name"]);    //   Kriti Srivastava
console.log(JsUser[mySym]);         //    mykeys1

// How to change the values of object?
// By using " = "

JsUser.email = "kriti@chatgpt.com"

// How to lock the values of object?
// We can freeze the object.

// Object.freeze(JsUser)    // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

JsUser.email = "kriti@microsoft.com"
console.log(JsUser);
// {
//  name: 'Kriti',
//  'full name': 'Kriti Srivastava',
//  age: 18,
//  location: 'Lucknow',
//  email: 'kriti@chatgpt.com',
//  isLoggedIn: false,
//  lastLoginDays: [ 'Monday', 'Saturday' ],
//  [Symbol(key1)]: 'mykeys1'
// }

// Now let's add a function,
// In Js there is no discrimination between functions, you can treat them like variables.

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting);   // [Function (anonymous)]  // Function has not been executed, we only got reference of it.
console.log(JsUser.greeting());  // Hello Js User

// Now we want to reference the name inside the object;
// Whenever we want to reference the same object we can write "this"
// By putting ( . ) we can access all the properties within our object.

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());    // Hello Js User, Kriti


// Note-: Whenever you access the values, mostly do it with dor notation but we do have some cases where we need to use the square brackets.
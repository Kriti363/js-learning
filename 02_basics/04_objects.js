// How to make object singleton or how to declare them using constructor?

const tinderUser = new Object()   // singleton object          // {}
const tinderUser1 = {}            //  non-singleton object    //  {}

tinderUser.id = "123abc"
tinderUser.name = "Shiimii"
tinderUser.isLoggedIn = false

//console.log(tinderUser);   // { id: '123abc', name: 'Shiimii', isLoggedIn: false } 
//console.log(tinderUser1);   


// Now we'll declare object inside object;

const regularUser = {
    email: "ks@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kriti",
            lastname: "srivastava"
        }
    }
}

//console.log(regularUser.fullname);
// { userfullname: { firstname: 'kriti', lastname: 'srivastava' } }
//console.log(regularUser.fullname.userfullname);
// { firstname: 'kriti', lastname: 'srivastava' }
//console.log(regularUser.fullname.userfullname.firstname);
// kriti


// Let's combine objects now;

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3); 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); 
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Object.assign-> Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// Storing it in obj3 cause it returns a value.
// Here the {} is acting as a target and rest as source, giving {} isin't compulsory though, if we don't then obj1 acts as a target and rest values as source.

const obj3 = {...obj1, ...obj2}     // We spread the value and then combined. (used mostly)
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Whenever values come from database, we use the syntax;
// When users come from database they come as array of objects.

const user = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]

// Now we need to loop through or print some value,

user[1].email
console.log(tinderUser);

// Now i need all the keys of an object;

console.log(Object.keys(tinderUser));         // [ 'id', 'name', 'isLoggedIn' ]
// Returns the names of the enumerable string properties and methods of an object.
// The datatype is array (took all the keys and put it into array), now you can run a loop over it.

console.log(Object.values(tinderUser));     //   [ '123abc', 'Shiimii', false ]
// Returns an array of values of the enumerable own properties of an object.

console.log(Object.entries(tinderUser));  
// [ [ 'id', '123abc' ], [ 'name', 'Shiimii' ], [ 'isLoggedIn', false ] ] 
// Returns an array of key/values of the enumerable own properties of an object.
// Every key values is made into ana array.


// Sometimes you are looping through an object and trying to fetch some value, what if the values doesn't exist? You can ask.

console.log(tinderUser.hasOwnProperty("isLoggedIn"));     // true
// Determines whether an object has a property with the specified name.

console.log(tinderUser.hasOwnProperty("isLogged"));     //   false


// To more about the methods of objects, you can inspect it on console.
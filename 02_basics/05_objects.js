// Destructuring of an Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);        // hitesh

// To make our code clean we will print like;

const {courseInstructor} = course
console.log(courseInstructor);        // hitesh

// We can also destructre the value,

const {courseInstructor: instructor} = course
console.log(instructor);            // hitesh


// API -: Whenever you want to put your responsibilty on someone else's head, that is called an API. Example- Ordering food in a restuarant, menu card is like a documentation of API. We just order without any worry what willl happen in the backend.
// API is nothing but how you write the values coming from the backend.
// Earlier values used to come in the form of XML structure which were quiet complex.
// But now values come in the form of JSON.

// How does JSON look? 
// {}
// It is a kind of object only, not any name to it.

// {
//    "name": "kriti",
//    "coursename": "js in hindi",
//    "price": "free"
// }

// It is being treated as JSON so it doesn't have any name so here your keys are usually a String too and their values are String too.

// Now let's see what actually happpens when API is called from JSON; 
// We need to learn how to use fetch method in API or in Js, and from fetch method we'll call the URL and in response we'll get the data. (This is the way of getting the API value)
// Then will then convert it into an object and will extract value one by one.

// You can also get API in the format of an Array->

[
    {},
    {},
    {}
]

// Here the Array has many types of objects. 
// We'll later learn how to loop over an Array and fetch the values from the object.

// Randomuser me Api-: It is a very famous API.
// We get a sample response over their. For understanding them we need to spend some time, also we have some good tools to understand them like "JSON formatter".
// There we have different options like- Code, Text, Tree, FORM, View. For understanding it's response. 

// JSON is simply a Js object notation. Not limited to only Js, works in the whole industry of API.
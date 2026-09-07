const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros =  ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// push- Pushes on existing array.

console.log(marvel_heros);
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3]);
// [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][1]);
// flash

// Here the problem is that array has come inside array, which we did not wanted.


// 1) concat- Returns a new array.
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.


const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// 2) Spread operator-:

// Now i want to spread two arrays (we can do multiple);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// Now all the elements have become individual cause of spread out values.


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// 3) another_array.flat(Infinity)
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Infinity covers all the depth (the maximum recursion depth) automatically.

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// When we do data scraping from any web page, it comes in different formats like node list or in objects or in string but we want it in array, as we can only loop in array. So there we can use array as this (we can ask the query as well as convert it);

console.log(Array.isArray("Kriti"));     // false  // asking a question

console.log(Array.from("Kriti"));      // [ 'K', 'r', 'i', 't', 'i' ]  // conversion
// Creates an array from an iterable object.

console.log(Array.from({name: "kriti"}));    // []    // interesting
// Cause here to need to tell whether to create array from all the keys or from all the values.


// If you have multiple variables or array which needs to be converted to an array;

// 4) Array.of(score1, score2, score3)
// Returns a new array from a set of elements.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // [ 100, 200, 300 ]
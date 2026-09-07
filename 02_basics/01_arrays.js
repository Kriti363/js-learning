// Array-:
//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// Description:
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics;

//JavaScript arrays are resizable and can contain a mix of different data types.(When those characteristics are undesirable, use typed arrays instead.)

//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.   
// console.log(myArr[1]);

//JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

//JavaScript array-copy operations create shallow copies.


// Shallow copy- A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// Deep copy- A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const myArr = [0, 1, 2, 3, 4, 5]    // inside [] we have elements.
const myHeroes = ["Spiderman", "Flash"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// When we inspect onn console, we get prototype and length for array. Also once we expand prototype we further get one more prototype.


// Array methods-:

// 1) myArr.push()
// Appends new elements to the end of an array, and returns the new length of the array.

// 2) myArr.pop()
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// 3) myArr.unshift()
// Elements to insert at the start of the array.

// 4) myArr.shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.


//myArr.push(6)             // [ 0, 1, 2, 3, 4, 5, 6 ]
//myArr.push(7)            //  [ 0, 1, 2, 3, 4, 5, 6, 7 ]
//myArr.pop()             //   [ 0, 1, 2, 3, 4, 5, 6 ]

//myArr.unshift(9)        //     [ 9, 0, 1, 2, 3, 4, 5 ]
//myArr.shift()          //      [ 0, 1, 2, 3, 4, 5 ]

// Some methods in Js are questionnaire methods, you ask any question and they answer in true or false.

// 5) myArr.includes()
// Determines whether an array includes a certain element, returning true or false as appropriate.

// 6) myArr.indexOf()
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// 7) myArr.join()
// Adds all the elements of an array into a string, separated by the specified separator string.

// 8) myArr.slice()
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// start- The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// end- The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

// 9) myArr.splice()
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// start- The zero-based location in the array from which to start removing elements.
// end- The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.
// returns- An array containing the elements that were deleted.
// *** splice operation, manipulates the original array. 


//console.log(myArr.includes(9));      // false ( Boolean type)
//console.log(myArr.indexOf(19));     //  -1

//const newArr = myArr.join()         //    0,1,2,3,4,5

//console.log(myArr);   
//console.log(newArr); 
//console.log(typeof newArr);      // string


console.log("A ", myArr);               // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)        
console.log(myn1);                   //    [ 1, 2 ]  
console.log("B ", myArr);           //     B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)   
console.log("C ", myArr);        //        C  [ 0, 4, 5 ]
console.log(myn2);              //         [ 1, 2, 3 ]
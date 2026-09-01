console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Problem arises when we start to compare two different datatypes

console.log("2" > 1);      // true
console.log("02" > 1);    //  true
console.log("03" > 1);

console.log(null > 0);        // false
console.log(null == 0);      //  false
console.log(null >= 0);     //   true

// The reason is that equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 0);       // false 
console.log(undefined > 0);     //  false
console.log(undefined < 0);    //   false

// undefined mostly gives false only

// try avoiding such comparisons at first place to avoid confusion


// ===  (strict checks the value, also its datatype)

console.log("2" === 2);   // false
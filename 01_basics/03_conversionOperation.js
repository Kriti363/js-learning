let score = "33"    

console.log(typeof score);      //both are same
console.log(typeof (score));   //way of representing

let valueInNumber = Number(score) //score in numbers       
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NAN (not a number)
// true => 1; false => 0
// undefined => NAN
// null => 0 (which is not appropriate)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kriti" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********** Operations **********

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);    // two to the power of three
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " kriti"

let str3 = str1 + str2    // concatenation
console.log(str3);

console.log("1" + 2);           // 12 
console.log(1 + "2");          // 12 
console.log("1" + 2 + 2);     // 122 (whole as str)  
console.log(1 + 2 + "2");    // 32  (operation then str)

console.log( (3 + 4) * 5 % 3);  // 2 (a better way)

console.log(+true);  // 1
console.log(+"");   //  0   // although not preferred

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);   // 101
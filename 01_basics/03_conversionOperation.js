let score = "33"    

//console.log(typeof score);      //both are same
//console.log(typeof (score));   //way of representing

let valueInNumber = Number(score) //score in numbers       
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NAN (not a number)
// true => 1; false => 0
// undefined => NAN
// null => 0 (which is not appropriate)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kriti" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
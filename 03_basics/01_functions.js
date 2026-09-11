// Functions-:
// It is a simple method used when we want to run lines of code, we bundle them in a package. Then you take the copy of that package as many times as you want.

function sayMyName() {
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
}
// Above is the definition of the function.
// function is the keyword.
// sayMyName is the name of the function.
// () and then {} for the scope of the function, i.e., definition of the function.

// Now we can call this as many times as i want;

sayMyName()

// sayMyName- Is the reference of the function (where function stays).
// ()- Is the execution.

// K
// R
// I
// T
// I

// In Js you don't need to give the type of the number.

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers()        // NaN
addTwoNumbers(3, 7)   //  10 (cause now the arguments were passed)

// Problem arises when the given arguments doesn't match the datatype,
addTwoNumbers(3, "4")       // 34
addTwoNumbers(3, "a")      //  3a
addTwoNumbers(3, null)    //   3

// Therefore the checking is very important. We'll learn later how to check it's datatype.

// Whenever you are making the definition of the function, whatever input you take, those are known as parameters.
// When you call the function then the values you pass in it are known as arguments.

// We can also store the function call in a variable also.

// const result = addTwoNumbers(3, 5)      // 8
// console.log("Result:" ,result);        //  Result: undefined

// Why undefined?
// console just prints and doesn't return anything. return in itself is a different concept.

function addTwoNumbers(number1, number2) {
     let result = number1 + number2
     return result
     console.log("Kriti");

    return number1 + number2
}
const result = addTwoNumbers(3, 5)    
console.log("Result:" ,result);       // Result: 8

// The console log in the scope will never get executed cause it's the by default rule of the function that after return, no function will work. But before return it will get executed.

// One result is declared in addTwoNumbers and other is declared in outside the function. These are two different things which we will cover in scope.

// Whenever we return, we need to store it in a variable. Not from console.log

function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage("Kriti")  

// function has returned the value but you haven't print it or stored in any variable. 

console.log(loginUserMessage("Kriti"));      // Kriti just logged in
console.log(loginUserMessage(""));          //  just logged in
console.log(loginUserMessage());           //   undefined just logged in (cause it is not defined)

// In that case we can check using if else,

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`               // Please enter a username

}

// We have one more way that's used in professional code,

function loginUserMessage(username){
    if(!username){ 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`                // Please enter a username
}

// ! - Is a NOT symbol, it converts true to false and false to true.
// In Js can empty String ("") is considered as a false value. Similary undefined is also considered a false value.
// if(!username)- Is same as if(username === undefined).

// Now if you want to totally avoid this situation when you don't pass any anything then, you can give some default values. For that (username = "sam").
// Now we never go inside the if block cause the value will never be undefined. Minimum to minimum it will be sam.

function loginUserMessage(username = "sam"){
    if(!username){ 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`                // Please enter a username
}

console.log(loginUserMessage());                // sam just logged in
console.log(loginUserMessage("kriti"));        //  kriti just logged in
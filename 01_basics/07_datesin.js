// Date in Js-:

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1st 1970.
// They took an arbitrary date January 1st 1970 and from their we declare and our dates get calculated.
// Date are usually calculated in milliseconds.
// Whenever you declare date object, a long String comes that is usually time in milliseconds since January 1st. 

// TC39-: Is an orginization, the Js consortium, that defines all the new features.
// They are coming up with the Temporal API. To make date a global object, same as Math.


let myDate = new Date()
console.log(myDate);       // 2026-09-06T15:24:15.989Z

// Let's try to convert Date into String;

console.log(myDate.toString());   // Sun Sep 06 2026 15:26:21 GMT+0000 (Coordinated Universal Time)

// Some other methods;

console.log(myDate.toDateString());    // Sun Sep 06 2026

console.log(myDate.toISOString());    //  2026-09-06T15:28:55.460Z

console.log(myDate.toJSON());        //   2026-09-06T15:29:34.430Z

console.log(myDate.toLocaleDateString());    // 9/6/2026

console.log(myDate.toLocaleString());   // 9/6/2026, 3:31:53 PM

console.log(typeof myDate);   // object

// Now if we want to declare a specific Date-
// Have different formats,

let myCreatedDate1 = new Date(2026, 0, 23)      // (year, month, date)
console.log(myCreatedDate1.toDateString());    //  Fri Jan 23 2026

// Months in Js starts from zero.
// We can also declare time,

let myCreatedDate2 = new Date(2026, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());    // 1/23/2026, 5:03:00 AM

// For MMDDYY OR YYDDMM format,

let myCreatedDate3 = new Date("2003-03-03")
console.log(myCreatedDate3.toLocaleString());   // 3/3/2003, 12:00:00 AM

let myCreatedDate4 = new Date("03-04-2023")
console.log(myCreatedDate4.toLocaleString());   // 3/4/2023, 12:00:00 AM


// We also have Time Stamps inside Date (These are used to design quizzes, polls, etc.)

let myTimeStamp = Date.now()
console.log(myTimeStamp);     // 1788709732806 // time in milliseconds from 1st Jan 1970 till now.

// Extracting values from these milliseconds is quiet tricky.

console.log(myCreatedDate1.getTime());

// 1788710192802 
// 1677888000000
// We get these two values in milliseconds to compare them easily.
// Comparions always happens in milliseconds.


// How to convert it into seconds?

console.log(Math.floor(Date.now()/1000));     // Math.floor to get the value in seconds without any decimal digit.


// Some more methods associated with Date;

let newDate = new Date()
console.log(newDate);                // 2026-09-06T16:03:19.923Z
console.log(newDate.getMonth() + 1);    //  8  ( +1 to avoid confusion, as in js months start with zero)
console.log(newDate.getDay());     // 0
console.log(newDate.getDate());               // 6
console.log(newDate.getFullYear());          //  2026
console.log(newDate.getHours());            //   16
console.log(newDate.getMilliseconds());    //    335
console.log(newDate.getMinutes());        //     6
console.log(newDate.getSeconds());       //      6
console.log(newDate.getTime());         //       1788710766335
console.log(newDate.getTimezoneOffset());    // 0
console.log(newDate.getUTCDate());          // 6

// Many more....

// Important method to customize the LocaleString;

newDate.toLocaleString('default', {
    weekday: "long",
})

// to get the suggestion for methods-: CTRL+SPACEBAR
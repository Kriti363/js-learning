const accountId = 144553
let accountEmail = "kriti@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let  accountState;

// accountId = 2 // not allowed

accountEmail = "ks@ks.com"
accountPassword = "21212121"
accountCity = "Lucknow"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/* let attempts = 0;
let correctPassword = "myPassword1!";
let secretInfo = "My favourite colour is #000080!";
console.log("Hello from JS file");
console.log(correctPassword);
console.log(secretInfo);
let userInput = prompt("Please enter the password");
while (attempts < 2) {
    if (correctPassword === userInput) {
    alert("Your password is correct! " + secretInfo); 
    break;
} 
else {
    attempts++;
    alert("Your password is incorrect, try again. ");
    userInput = prompt("Please enter the password");
}
} */

let correctPassword = "myPassword1!";
let secretInfo = "My favourite colour is #000080!";
function authenticateUser() {
    let attempts = 0;
       let userInput = prompt("Please enter the password");
    while (attempts < 2) {
        if (correctPassword === userInput) {
        return true;
        break;
    } 
    else {
        attempts++;
        userInput = prompt("Please enter the password, you have " + (3-attempts) + " attempts left...");
    }
    }
    return false;
}
let isLoggedIn = authenticateUser();
if (isLoggedIn === true) {
    console.log(secretInfo);
}
else {
    console.log("Wrong!");
}



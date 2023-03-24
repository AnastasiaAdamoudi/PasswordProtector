// Use setInterval to make the hand move around the clock every second (60 times a minute)
// It should complete a full revolution every 60 seconds
// Create a function that rotates the hand
// Use setInterval to call the function every second
// Use the clearInterval function to stop the clock from moving after 60 seconds


const secondHand = document.querySelector(".secondHand"); // This is the hand element
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");
/*
let seconds = 0; // Setting a counter (the seconds that have passed) to 0 so that we can increment it by 1 every second in the function
function rotateSecondHand() { 
    secondHand.style.transform = `rotate(${seconds*6}deg)`;
    // The above rotates the hand 6deg for every second that passes.
    // So the first time the hand is on the position of 12 as the seconds variable is 0.
    // The second time the hand is on the position of 1 as the seconds variable is 1 and the hand rotates 6 more degrees.
    // The third time the hand is on the position of 2 as the seconds variable is 2. 
    
    seconds++; // Increment the seconds variable by 1 to keept track of the seconds that have passed
    if (seconds > 60) {
        clearInterval(intervalId); // Stop the clock from moving after 60 seconds, so it stops when the hands reaches the position of 12 again
    }
} // Function that rotates the hand 6deg for every second that passes and stops the clock from moving after 60 seconds
// Call the function rotateSecondHand every second to keep it moving around the clock
// If we use the clearInterval function after setIntervalSec, the hand stops moving after 1 second
// We need to use the clearInterval function inside the rotateSecondHand function so that the hand stops moving after 60 seconds but keeps moving every second
const intervalIdSec = setInterval(rotateSecondHand, 1000);
*/

function rotateClockHands() {
    const now = new Date(); // Create a new Date object
    const seconds = now.getSeconds(); // Get the seconds from the Date object
    const minutes = now.getMinutes(); // Get the minutes from the Date object
    const hours = now.getHours(); // Get the hours from the Date object
    secondHand.style.transform = `rotate(${seconds*6}deg)`;
    minuteHand.style.transform = `rotate(${minutes*6}deg)`;
    hourHand.style.transform = `rotate(${(hours % 12) * 30 + (minutes / 2)}deg)`;
} // Function that rotates the hands 6deg for every second that passes, 6deg for every minute that passes and 30deg for every hour that passes
const intervalId = setInterval(rotateClockHands, 1000); 



// Import the CSS file for styling
import './style.css';

// Initialize timer variables
let timeLeft = 1500; // 25 minutes in seconds
let timerInterval; // Variable to hold the timer interval reference

// Get references to the HTML elements
const timerDisplay = document.getElementById('timer'); // Display for the timer
const startBtn = document.getElementById('start-btn'); // Start button
const resetBtn = document.getElementById('reset-btn'); // Reset button

// Function to update the timer display on the screen
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60); // Calculate minutes left
  const seconds = timeLeft % 60; // Calculate seconds left
  // Format the display to ensure two digits for minutes and seconds
  timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to start the timer
function startTimer() {
  // Only start a new timer if one is not already running
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--; // Decrement the time left
        updateTimerDisplay(); // Update the display
      } else {
        clearInterval(timerInterval); // Stop the timer when time is up
        alert('Pomodoro session completed! Time for a break.'); // Alert the user
      }
    }, 1000); // Set the interval to 1 second
  }
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval); // Stop the current timer if it exists
  timerInterval = null; // Reset the timer interval reference
  timeLeft = 1500; // Reset time left to 25 minutes
  updateTimerDisplay(); // Update the display to show the reset time
}

// Add event listeners to the buttons for user interaction
startBtn.addEventListener('click', startTimer); // Start the timer when the button is clicked
resetBtn.addEventListener('click', resetTimer); // Reset the timer when the button is clicked

// Initialize the timer display on page load
updateTimerDisplay();

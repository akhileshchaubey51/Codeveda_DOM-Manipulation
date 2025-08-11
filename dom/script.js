// Initial count
let count = 0;

// DOM elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Increment event
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

// Decrement event (no negative values)
decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

// Reset event
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Update display function with color change + animation
function updateDisplay() {
    countDisplay.textContent = count;

    if (count === 0) {
        countDisplay.style.color = "#dc3545"; // red
    } else if (count <= 5) {
        countDisplay.style.color = "#ff9800"; // orange
    } else {
        countDisplay.style.color = "#28a745"; // green
    }

    // Trigger pop animation
    countDisplay.classList.remove("pop");
    void countDisplay.offsetWidth; // restart animation
    countDisplay.classList.add("pop");
}

// Initialize
updateDisplay();

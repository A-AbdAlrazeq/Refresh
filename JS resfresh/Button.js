// Load count from localStorage or set to 0 if not found
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;
const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");

// Initialize counter display
counterDisplay.textContent = count;

// Disable button if count is already 10
if (count >= 10) {
  clickButton.disabled = true;
}

clickButton.addEventListener("click", () => {
  if (count < 10) {
    count++;
    counterDisplay.textContent = count;
    localStorage.setItem("count", count);
  }

  if (count >= 10) {
    clickButton.disabled = true;
    setTimeout(() => {
      count = 0;
      counterDisplay.textContent = count;
      localStorage.setItem("count", count);
      clickButton.disabled = false; // Re-enable the button
    }, 2000); // Reset after 2 seconds
  }
});

// Waits until the whole HTML document is loaded
document.addEventListener("DOMContentLoaded", () => {

  // Select the box and button elements by their IDs
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random HEX color
  function getRandomColor() {
    const letters = "0123456789ABCDEF"; // all possible HEX characters
    let color = "#"; // start with #
    for (let i = 0; i < 6; i++) {
      // randomly pick 6 characters to build a HEX code
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; // return the HEX color string
  }

  // Add a click event listener to the button
  changeColorBtn.addEventListener("click", () => {
    // Get a new random color
    const newColor = getRandomColor();
    // Apply the new color to the box background
    colorBox.style.backgroundColor = newColor;
  });
});

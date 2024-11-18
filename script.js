// Variables
let input = document.getElementById("fahrenheit-input");
let btn = document.getElementById("convert-btn");
let output = document.getElementById("output");
let thermometerImg = document.getElementById("thermometer-img");
let link = document.getElementById("link");

// Event Listeners
btn.addEventListener("click", convert);

// Function to convert fahrenheit to celsius
function convert() {
  // Input
  let num = +input.value;

  // Process
  let celsius = ((num - 32) * 5) / 9;
  celsius = Math.round(celsius);

  // Output
  output.innerHTML = celsius;
  input.value = "";
  btn.style.backgroundColor = "#26d978";
  thermometerImg.src = "images/thermometer.png";
  link.href = "https://www.google.com/";
}

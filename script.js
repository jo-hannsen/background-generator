var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function colorChange () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    printColors();
}

function printColors () {
    css.textContent = body.style.background + ";";
}

function initialGradientColors () {
    const style = getComputedStyle(body);
    css.textContent = style.getPropertyValue("background-image");
}

function getRandomNo () {
    randomNo = Math.floor(Math.random() * 256);
    return randomNo;
}

function colorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function convertRGBtoHex(red, green, blue) {
  return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

function getRandomRGB () {
    //get random RGB
    redValue = getRandomNo();
    greenValue = getRandomNo();
    blueValue = getRandomNo();

    //convert RGB to HEX
    colorHex = convertRGBtoHex(redValue, greenValue, blueValue);
    console.log(colorHex);

    //return color as HEX
    return colorHex;
}

function randomColorChange () {
    //get random colors
    color1RandomValue = getRandomRGB();
    color2RandomValue = getRandomRGB();

    //set random colors for background gradient
    body.style.background = 
    "linear-gradient(to right, "
    + color1RandomValue
    + ", "
    + color2RandomValue
    + ")";

    //set random colors for color values
    printColors();
    color1.value = color1RandomValue;
    color2.value = color2RandomValue;
}

initialGradientColors();
color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
button.addEventListener("click", randomColorChange);
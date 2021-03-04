let redDisplay;
let greenDisplay;
let blueDisplay;
let rgbDisplay;

let redInput;
let greenInput;
let blueInput;

let decimalOut;
let indexOut;
let hexOut;

window.onload = function() {
    redDisplay = document.querySelector(".red-display");
    greenDisplay = document.querySelector(".green-display");
    blueDisplay = document.querySelector(".blue-display");

    redInput = document.querySelector(".color-red");
    greenInput = document.querySelector(".color-green");
    blueInput = document.querySelector(".color-blue");
    rgbDisplay = document.querySelector(".rgb-display");

    decimalOut = document.querySelector("#decimalRGB");
    indexOut = document.querySelector("#indexRGB");
    hexOut = document.querySelector("#hexRGB");

    redDisplay.style.backgroundColor = "rgb(" + redInput.value + ", 0, 0)";
    greenDisplay.style.backgroundColor = "rgb(0, " + greenInput.value + ", 0)";
    blueDisplay.style.backgroundColor = "rgb(0, 0, " + blueInput.value +")";
    updateRgbDisplay();

    updateOutput();

    redInput.addEventListener('input', function() {
        updateOutput();
        redDisplay.style.backgroundColor = "rgb(" + redInput.value + ", 0, 0)";
        updateRgbDisplay();
    });

    greenInput.addEventListener('input', function() {
        updateOutput();
        greenDisplay.style.backgroundColor = "rgb(0, " + greenInput.value + ", 0)";
        updateRgbDisplay();
    });

    blueInput.addEventListener('input', function() {
        updateOutput();
        blueDisplay.style.backgroundColor = "rgb(0, 0, " + blueInput.value +")";
        updateRgbDisplay();
    });
}

function updateOutput() {
    decimalOut.innerHTML = "Decimal: " + redInput.value + " " + greenInput.value + " " + blueInput.value;
    indexOut.innerHTML = "Index: " + shorten(redInput.value / 255) + " " + shorten(greenInput.value / 255) + " " + shorten(blueInput.value / 255);
    hexOut.innerHTML = "Hex: #" + toHex(redInput.value) + toHex(greenInput.value) + toHex(blueInput.value);
}

function toHex(d) {
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function shorten(d) {
    return d.toString().substring(0, 4);
}

function updateRgbDisplay() {
    rgbDisplay.style.backgroundColor = "rgb(" + redInput.value + ", " + greenInput.value + ", " + blueInput.value + ")";
}
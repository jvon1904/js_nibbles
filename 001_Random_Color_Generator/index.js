const body = document.getElementsByTagName('body').item(0);
const colorLabel = document.getElementById('colorLabel');

function displayColor(color) {
  colorLabel.textContent = color;
}

function changeColor() {
  const rgbColor = `rgb(${randomByte()}, ${randomByte()}, ${randomByte()})`;
  body.style.backgroundColor = rgbColor;
  displayColor(rgbColor)
}

function randomByte() {
  return Math.floor((Math.random() * 256));
}

document.addEventListener('keypress', changeColor)
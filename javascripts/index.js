console.log('hello, we\'re clear for takeoff!')

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let myRectX = Math.floor(Math.random() * 100);
let myRectY = Math.floor(Math.random() * 50);

ctx.fillRect(canvas.width / 2, canvas.height / 2, 50, 50);
ctx.strokeRect(50, 100, 50, 50);

const intervalId = setInterval(function () {
    console.log('hi')
    let myRectX = Math.floor(Math.random() * 700);
    let myRectY = Math.floor(Math.random() * 500);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = `#${randomColor}`;
    ctx.fillRect(myRectX, myRectY, 50, 50)
    // generate random color
    // make validation to keep each rect in margins

}, 3000)
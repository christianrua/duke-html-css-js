

console.log(document.getElementById("d1"));
console.log(document.querySelectorAll('*[id]'));

function getCanvas() {
    return document.getElementById("d1")
}

function changeCanvasBackground(color){
    //color must be the string name of the color, example "red","blue"
    var dd1 = getCanvas();
    dd1.style.backgroundColor = color;
} 

function getContext(){
    var canvas = getCanvas();
    var context = canvas.getContext("2d");
    return context;
}

function dolime() {
    changeCanvasBackground("lime");
}

function doyellow(){
    changeCanvasBackground("yellow");
    ddl = document.getElementById("d1");
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillRect(60,10,40,40);

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("hello",10,80);
}

function changecolor() {
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");

    dd1.className = "blueback";
    dd2.className = "yellowback";
}

function doRed() {
    changeCanvasBackground("red");
    var ctx = getContext();
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("maria",10,80);
}

function doBlue() {
    var canvas = getCanvas();
    var ctx = getContext();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    changeCanvasBackground("blue");
}

function docolor() {
    var colorinput = document.getElementById("clr").value;
    console.log(colorinput);
    changeCanvasBackground(colorinput);
}

function doSquare() {
    var size = document.getElementById("sldr").value;
    var canvas = getCanvas();
    var ctx = getContext();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,size,size);


}

//----------------------------------------------------------------------------------------
var paintcanvas = document.getElementById("canvas_");
var context = paintcanvas.getContext("2d");

var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {
    if(isNumeric(value)) {
        paintcanvas.width = value;
    }

}

function setHeight(value){
    if(isNumeric(value)) {
        paintcanvas.height = value;
    }
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}
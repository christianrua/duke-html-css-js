


var orignalImage;
var grayscaleImage;

function getCanvas() {
    return document.getElementById("can");
}

function getContext() {
    var canvas = getCanvas();
    var ctx = canvas.getContext('2d');
    return ctx;
}

function uploadMine() {
    var input = document.getElementById("finput");
    var filename = input.value;
    console.log(filename);
    var canvas = getCanvas();
    var c2d = getContext();

    input.onchange=function() {
        console.log("entering on change");
        var img = new Image()
        img.onload = function() {
            canvas.width = this.width
            canvas.height = this.height
            c2d.drawImage(this, 0, 0)
            URL.revokeObjectURL(this.src)
        }
        img.src = URL.createObjectURL(this.files[0])
    }
    
   
}

function upload(){
    var input = document.getElementById("finput");
    orignalImage = new SimpleImage(input);
    grayscaleImage = new SimpleImage(input);
    var canvas = getCanvas();
    orignalImage.drawTo(canvas);
}

function uploadText(){
    var fileInputText = document.getElementById("inputText");
    var filename = fileInputText.value;
    alert("you already type: " + filename)
    fileInputText.value = "";
}

function grayScale() {
    var canvas = document.getElementById("canvasGrey");;
    for (var pixel of grayscaleImage.values()){
        var red = pixel.getRed(); 
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        var weigthedValue = Math.round(0.299*red+ 0.587*green + 0.114*blue);
        pixel.setRed(weigthedValue);
        pixel.setBlue(weigthedValue);
        pixel.setGreen(weigthedValue);
    }
    
    grayscaleImage.drawTo(canvas);
}
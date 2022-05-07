
var image = null;
var redImage = null;
var greyScaleImage = null;

function getCanvas(canvasName) {
    return document.getElementById(canvasName);
}

function getInputImage(idName) {
    return document.getElementById(idName);
}

function uploadImage(){
    var input = getInputImage("image");
    image = new SimpleImage(input);
    greyScaleImage = new SimpleImage(input);
    redImage  = new SimpleImage(input);
    var canvas = getCanvas("leftCanvas");
    image.drawTo(canvas);
}

function grayScale() {
    console.log("entering gray scale");
    var canvas =  getCanvas("leftCanvas");

    if(greyScaleImage == null || greyScaleImage.complete()){
        alert("image loaded");
        return;
    }


    for (var pixel of greyScaleImage.values()){
        var red = pixel.getRed(); 
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        var weigthedValue = Math.round(0.299*red+ 0.587*green + 0.114*blue);
        pixel.setRed(weigthedValue);
        pixel.setBlue(weigthedValue);
        pixel.setGreen(weigthedValue);
    }
    
    greyScaleImage.drawTo(canvas);
}

function redScale() {
    console.log("entering red scale");
    if(redImage == null || redImage.complete()){
        alert("image loaded");
        return;
    }

    var canvas =  getCanvas("leftCanvas");
    for (var pixel of redImage.values()) {
        var blueValue = pixel.getBlue();
        var redValue = pixel.getRed();
        var greenValue = pixel.getGreen();

        var blueGreenProportion = blueValue + greenValue;

        if (redValue < blueGreenProportion){
            pixel.setBlue = 0;
            pixel.setGreen = 0;
            pixel.setRed = 255;
        }; 
    
    redImage.drawTo(canvas);   
        
    }
}

function resetImage() {
    console.log("entering reset image");
    if(image == null || image.complete()){
        alert("image loaded");
        return;
    }
    var canvas =  getCanvas("leftCanvas");
    image.drawTo(canvas);

}
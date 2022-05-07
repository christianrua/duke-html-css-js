
var foregroundImage = null;
var backgroundImage = null;

function getCanvas(canvasName) {
    return document.getElementById(canvasName);
}

function getInputImage(idName) {
    return document.getElementById(idName);
}

function uploadForeground(){
    var input = getInputImage("foreground");
    foregroundImage = new SimpleImage(input);
    var canvas = getCanvas("leftCanvas");
    foregroundImage.drawTo(canvas);
}

function uploadBackground(){
    var input = getInputImage("background");
    backgroundImage = new SimpleImage(input);
    var canvas = getCanvas("rightCanvas");
    backgroundImage.drawTo(canvas);
}

function createComposite() {
    var bgImage = backgroundImage;
    var fgImage = foregroundImage;
    var canvas = getCanvas("rightCanvas");

    if(fgImage == null || fgImage.complete()){
        alert("foreground not loaded");
        return;
    }

    if(bgImage == null || bgImage.complete()){
        alert("background not loaded");
        return;
    }

    var output = new SimpleImage(bgImage.getWidth(), bgImage.getHeight());
    console.log(output);
    for(var pixel of bgImage.values()){
        if(pixel.getGreen() > pixel.getBlue() + pixel.getRed()){
            var x = pixel.getX();
            var y = pixel.getY();

            output.setPixel(x,y,fgImage.getPixel(x,y))    

        } else {
            output.setPixel(pixel.getX(),pixel.getY(),pixel)
        }
    }

    output.drawTo(canvas);
    var cleanImage = new SimpleImage(200, 200);
    var leftCanvas = getCanvas("leftCanvas");
    cleanImage.drawTo(leftCanvas);

}

function clearCanvances() {
    var cleanImage = new SimpleImage(200, 200);
    var rightCanvas = getCanvas("rightCanvas");
    var leftCanvas = getCanvas("leftCanvas");
    cleanImage.drawTo(rightCanvas);
    cleanImage.drawTo(leftCanvas);
}


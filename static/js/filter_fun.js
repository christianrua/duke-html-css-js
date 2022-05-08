
var image = null;
var redImage = null;
var greyScaleImage = null;
var rainbowImage = null;

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
    rainbowImage = new SimpleImage(input);
    var canvas = getCanvas("leftCanvas");
    image.drawTo(canvas);
}

function imageIsLoaded(image) {
    if(image == null){
        return false;
    } else {
        return true;
    }
}

function grayScale() {
    var canvas =  getCanvas("leftCanvas");

    if(!imageIsLoaded(greyScaleImage)){
        alert("you must to upload an image");
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

    if(!imageIsLoaded(redImage)){
        alert("you must to upload an image");
    }

    var canvas =  getCanvas("leftCanvas");
    for (var pixel of redImage.values()) {
        var blueValue = pixel.getBlue();
        var redValue = pixel.getRed();
        var greenValue = pixel.getGreen();

        var rgbAverage = (blueValue + greenValue + redValue)/3;

        if (rgbAverage < 128){
            pixel.setBlue(0);
            pixel.setGreen(0);
            pixel.setRed(2*rgbAverage);
        } else {
            pixel.setBlue(2*rgbAverage-255);
            pixel.setGreen(2*rgbAverage-255);
            pixel.setRed(255);
        }; 
    
    }
    redImage.drawTo(canvas); 
}    

function resetImage() {
    uploadImage()

}

function rainbowFilter() {
    var canvas =  getCanvas("leftCanvas");

    if(!imageIsLoaded(rainbowImage)){
        alert("you must to upload an image");
    }

    imageHeight = rainbowImage.getHeight();
    
    


    for(var pixel of rainbowImage.values()){
        var blueValue = pixel.getBlue();
        var redValue = pixel.getRed();
        var greenValue = pixel.getGreen();

        var pixelYValue = pixel.getY();
        

        var rgbAverage = (blueValue + greenValue + redValue)/3;
        

        if(pixelYValue <= Math.round((1/7) * imageHeight)) {
            console.log("entering 1/7, 1/7 value", Math.round((1/7) * imageHeight));
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(0);
                pixel.setGreen(0);
                pixel.setRed(2*rgbAverage);
            } else {
                pixel.setBlue(2*rgbAverage-255);
                pixel.setGreen(2*rgbAverage-255);
                pixel.setRed(255);
            }; 
        }
        else if (pixelYValue <= Math.round((2/7) * imageHeight) && Math.round((1/7) * imageHeight) <= pixelYValue) {
            console.log("entering 2/7, 1/7 value and 2/7  value",Math.round((1/7) * imageHeight),Math.round((2/7) * imageHeight));
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(0);
                pixel.setGreen(0.8*rgbAverage);
                pixel.setRed(2*rgbAverage);
            } else {
                pixel.setBlue(2*rgbAverage-255);
                pixel.setGreen(1.2*rgbAverage-51);
                pixel.setRed(255);
            }; 
        }
        else if (pixelYValue <= Math.round((3/7) * imageHeight) && Math.round((2/7) * imageHeight) <= pixelYValue) {
            console.log("entering 3/7, 2/7 value and 3/7  value",Math.round((2/7) * imageHeight),Math.round((3/7) * imageHeight));
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(0);
                pixel.setGreen(2*rgbAverage);
                pixel.setRed(2*rgbAverage);
            } else {
                pixel.setBlue(2*rgbAverage-255);
                pixel.setGreen(255);
                pixel.setRed(255);
            }; 

        }
        else if (pixelYValue <= Math.round((4/7) * imageHeight && Math.round((3/7) * imageHeight) <= pixelYValue)) {
            console.log("entering 4/7, 3/7 value and 4/7  value",Math.round((3/7) * imageHeight),Math.round((4/7) * imageHeight));
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(0);
                pixel.setGreen(2*rgbAverage);
                pixel.setRed(0);
            } else {
                pixel.setBlue(2*rgbAverage-255);
                pixel.setGreen(255);
                pixel.setRed(2*rgbAverage-255);
            }; 
        }
        else if (pixelYValue <= Math.round((5/7) * imageHeight) && Math.round((4/7) * imageHeight) <= pixelYValue) {
            console.log("entering 5/7, 4/7 value and 5/7  value",Math.round((4/7) * imageHeight),Math.round((5/7) * imageHeight));
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(2*rgbAverage);
                pixel.setGreen(0);
                pixel.setRed(0);
            } else {
                pixel.setBlue(2*rgbAverage-255);
                pixel.setGreen(255);
                pixel.setRed(2*rgbAverage-255);
            }; 

        }
        else if (pixelYValue <= Math.round((6/7) * imageHeight) && Math.round((5/7) * imageHeight) <=  pixelYValue ) {
            console.log("entering 6/7, 5/7 value and 6/7  value",Math.round((5/7) * imageHeight),Math.round((6/7) * imageHeight));
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(2*rgbAverage);
                pixel.setGreen(0);
                pixel.setRed(0.8*rgbAverage);
            } else {
                pixel.setBlue(255);
                pixel.setGreen(2*rgbAverage-255);
                pixel.setRed(1.2*rgbAverage-51);
            }; 
        } else {
            console.log("entering 7/7");
            console.log("pixelYValue",pixelYValue);
            if (rgbAverage < 128){
                pixel.setBlue(1.6*rgbAverage);
                pixel.setGreen(0);
                pixel.setRed(1.6*rgbAverage);
            } else {
                pixel.setBlue(0.4*rgbAverage+153);
                pixel.setGreen(2*rgbAverage-255);
                pixel.setRed(0.4*rgbAverage+153);
            };

        }
    }
    rainbowImage.drawTo(canvas); 
}
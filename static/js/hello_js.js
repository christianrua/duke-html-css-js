
function helloJs(){
    document.getElementById('demo').innerHTML = Date()
}

function greenScreen() {
    var fgImage = new SimpleImage();
    var bImage = new SimpleImage();
    var w = fgImage.getWidth();
    var w2 = bImage.getWidth();

}

//code to change pixel's color
var img = new SimpleImage(200,200);
for (var pixel of img.values()){
    pixel.setRed(255);
    pixel.setBlue(255);
    pixel.setGreen(0);
}
print(img);

//Exercise 4 

var image = new SimpleImage("astrachan.jpg");
for (var pixel of image.values()){
    
    if (pixel.getY() >= 349) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    } 
}
print(image);

//Exercise 5

var image = new SimpleImage("chapel.png");
for (var pixel of image.values()){
    
    if (pixel.getY() <= 50 && pixel.getX() <= 50) {
        pixel.setRed(0);
        pixel.setGreen(250);
        pixel.setBlue(0);
    } 
}
print(image);


// exercise 6
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    for (var pixel of someImage.values()) {
        if (pixel.getY() <= cornerHeight  && pixel.getX() >= (someImage.getWidth() - cornerWidth)) {
        pixel.setRed(red);
        pixel.setGreen(green);
        pixel.setBlue(blue);
    } 
    }
    return someImage;
   
}

// Programming Exercise: Modifying Images
function threeVerticals(someImageName) {
    var someImage = new SimpleImage(someImageName);
    var width = someImage.getWidth();
    for (var pixel of someImage.values()) {
        if(pixel.getX() <= width/3) {
            pixel.setRed(255);
        } else if (pixel.getX() > width/3 && pixel.getX() <= 2*(width/3)) {
            pixel.setGreen(255);

        } else {
            pixel.setBlue(255);
        }
    }
    return someImage;
}

print(threeVerticals("hilton.jpg"));

//modifing images part 2
function swapRedGreenPixel(pixel) {
    var actualRedValue = pixel.getRed();
    var actualGreenValue = pixel.getGreen();
    
    pixel.setRed(actualGreenValue);
    pixel.setGreen(actualRedValue);

    return pixel;

}

function swapRedGreenImage(someImageName) {
    var someImage = new SimpleImage(someImageName);
    for (var pixel of someImage.values()) {
        pixel = swapRedGreenPixel(pixel);
    }
    return someImage;
}

print(swapRedGreenImage(someImageName));

//part 3
function swapBlueYellowImage(someImageName) {
    var someImage = new SimpleImage(someImageName);
    for (var pixel of someImage.values()) {
        var blueValue = pixel.getBlue();
        var redValue = pixel.getRed();
        var greenValue = pixel.getGreen();

        var redGreenProportion = redValue + greenValue;

        if (blueValue > redGreenProportion){
            pixel.setBlue = 0;
            pixel.setGreen = 255;
            pixel.setRed = 255;
        }; 
    
    return someImage;    
        
    }
}

//Programming Exercise: Advanced Modifying Images
function greenScreen(bgImageName, fgImageName) {
    var bgImage = new SimpleImage(bgImageName);
    var fgImage = new SimpleImage(fgImageName);

    var output = new SimpleImage(bgImage.getWidth(), bgImage.getHeight());

    for(var pixel of bgImage.values()){
        if(pixel.getGreen() > pixel.getBlue() + pixel.getRed()){
            var x = pixel.getX();
            var y = pixel.getY();

            output.setPixel(x,y,fgImage.getPixel(x,y))    

        } else {
            output.setPixel(pixel.getX(),pixel.getY(),pixel)
        }
    }

    return output;
}

print(greenScreen("drewRobert.png","dinos.png"));

//Part 2 
function fourSquaresColors(){
    var img = new SimpleImage(200,200);
    for (var px of img.values()){
        var x = px.getX();
        var y = px.getY();
        if (x < img.getWidth()/2){
            px.setRed(255);
        }
        if (y>img.getHeight()/2){
            px.setBlue(255);
        }
        if (x > img.getWidth()/2 && y<img.getHeight()/2) {
            px.setGreen(255);
        }
    }
    print (img);
}


// part3 

function setBlack(pixel) {
    pixel.setBlue(0);
    pixel.setRed(0);
    pixel.setGreen(0);

    return pixel;
}

function addBorder(pxBorderSize, imageName) {
    var image = new SimpleImage(imageName);
    var widht = image.getWidth();
    var height = image.getHeight();
    for (var px of image.values()){
        var x = px.getX();
        var y = px.getY();
        if(x <= pxBorderSize || y <= pxBorderSize ||(widht - x) <= pxBorderSize || (height - y) <= pxBorderSize) {
            px = setBlack(px);
        } 
    }

    return image;
}


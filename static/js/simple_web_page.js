
function dochange() {
    callwhite()
    alert('clicked button with JS function');
}

function callConfirm(){
    callwhite()
    var choise = confirm("do you want to call the confirm method?");
    if(choise == true){
        var message = "You pressed OK!";
    } else {
        var message = "Are you sure you want to cancel?";
    }

    alert(message);
}

function changecolor() {
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");

    dd1.className = "blueback";
    dd2.className = "yellowback";
}

function callwhite() {
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");

    dd1.className = "whiteback";
    dd2.className = "whiteback";
}

function changelanguage() {
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");

    dd1.innerHTML = "Bonjour";
    dd2.innerHTML = "Sayonara";
}
canvas= document.getElementById("myCanvas");

var img_image = "Alpkey.png";

rover_x=15;
rover_y=15;

function add() {
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadBackground;
    backgroundimgtag.src =backgroundImg;
}

function uploadBackground() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", ekeyDown)

function ekeyDown(e) 
{
    keyPressed = e.keycode;
    console.log(keyPressed);

        if((keyPressed >=97 && keyPressed <=122)|| (keyPressed >=65 && keyPressed <=90))
        {
            alphabetkey();
            document.getElementById("d1").innerHTML="You pressed alphabet key";
            console.log("alphabetkey")
        }
}

function alphabetkey()
{
        img_image = "Alpkey.png";
    add();
}
var canvas=new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
var player_object=" ";
var block_object=" ";
player_x=10;
player_y=10;

function player_update() {
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
    
});
canvas.add(player_object);

});
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_img_width);
    block_object.scaleToHeight(block_img_height);
    block_object.set({
        top:player_y,
        left:player_x
        
    });
    canvas.add(block_object);
    
    });
    }
    
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
//,109 decrease//
if(e.shiftKey == true && keyPressed =="107"){
console.log("shift+ plus are pressed");
block_img_width=block_img_width+10;
block_img_height=block_img_height+10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
}
if(e.shiftKey == true && keyPressed =="109"){
    console.log("shift+ minus are pressed");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keyPressed =="38") {
    Up();
    console.log("up");
    }
    if(keyPressed =="40") {
            Down();
        console.log("Down");
        }
    if(keyPressed =="37") {
                 Left();
            console.log("Left");
            }
    if(keyPressed =="39") {
                Right();
                console.log("Right");
           }
    if(keyPressed =="87") {
            new_image("wall.jpg");
            console.log("W pressed");
    }
    if(keyPressed =="71") {
        new_image("ground.png");
        console.log("G pressed");
}
if(keyPressed =="76") {
    new_image("light_green.png");
    console.log("L pressed");
}
if(keyPressed =="84") {
    new_image("trunk.jpg");
    console.log("T pressed");
}
if(keyPressed =="82") {
    new_image("roof.jpg");
    console.log("R pressed");
}
if(keyPressed =="89") {
    new_image("yellow_wall.png");
    console.log("Y pressed");
}
if(keyPressed =="68") {
    new_image("dark_green.png");
    console.log("D pressed");
}
if(keyPressed =="85") {
    new_image("unique.png");
    console.log("U pressed");
}
if(keyPressed =="67") {
    new_image("cloud.jpg");
    console.log("C pressed");
}
        
    }
    function Up() {
    if(player_y>0){
    player_y=player_y-block_img_height;
    console.log("block_image_height :"+block_img_height);
    console.log("when up arrow pressed x= "+ player_x+"y= "+player_y);
    canvas.remove(player_object);
    player_update();
    }

    }
    function Down() {
        if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("block_image_height :"+block_img_height);
        console.log("when up arrow pressed x= "+ player_x+"y= "+player_y);
        canvas.remove(player_object);
        player_update();
     }
    
     }
     function Left() {
            if(player_x>0){
            player_x=player_x-block_img_width;
            console.log("block_image_width :"+block_img_width);
            console.log("when up arrow pressed x= "+ player_x+"y= "+player_y);
            canvas.remove(player_object);
            player_update();
     }
        
     }
     function Right() {
                if(player_x<=850){
                player_x=player_x+block_img_width;
                console.log("block_image_width :"+block_img_width);
                console.log("when up arrow pressed x= "+ player_x+"y= "+player_y);
                canvas.remove(player_object);
                player_update();
    }
            
    }
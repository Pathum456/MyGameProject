/**
 * @author _ Pathum_Kaleesha
 * @create - 2022-05-10 - 14.55
 * @since - v0.1.0
 **/
/*var x_axis=0,
    y_axis=0;
document.onkeydown=check_key;
function check_key(e){
    e=e|| window.event;
    if (e.keyCode='38'){
        //move up
        mov_buck("up");
    }else if (e.keyCode='40'){
        //move down
        mov_buck("down");
    }else if (e.keyCode='37'){
        //move left
        mov_buck("left");
    }else if (e.keyCode='39'){
        //move right
        mov_buck("right");
    }
}
function mov_buck(a){
    if (a== 'right'){
        x_axis=x_axis+10;
        $(".buck").css({"transform":"translate("+x_axis+"px,"+y_axis+"px,)"})
    }else if (a== 'left'){
        x_axis=x_axis-10;
        $(".buck").css({"transform":"translate("+x_axis+"px,"+y_axis+"px,)"})
    }else if (a== 'up'){
        y_axis=y_axis-10;
        $(".buck").css({"transform":"translate("+x_axis+"px,"+y_axis+"px,)"})
    }else if (a== 'down'){
        y_axis=y_axis+10;
        $(".buck").css({"transform":"translate("+x_axis+"px,"+y_axis+"px,)"})
    }
}*/
var buckDiv = document.getElementById("buckDiv");
var interval;
var both = 0;
function moveLeft() {
    var left = parseInt(window.getComputedStyle(buckDiv).getPropertyValue("left"));
    if (left > 0) {
        buckDiv.style.left = left - 63+ "px";
    }
}

function moveRigth() {
    var left = parseInt(window.getComputedStyle(buckDiv).getPropertyValue("left"));
    if (left < 819) {
        buckDiv.style.left = left + 63 + "px";
    }

}

document.addEventListener("keydown", event => {
    if (both === 0) {
        both++;
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRigth, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
});
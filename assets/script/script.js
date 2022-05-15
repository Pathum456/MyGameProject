/**
 * @author _ Pathum_Kaleesha
 * @create - 2022-05-13 - 23.17
 * @since - v0.1.0
 **/
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var bgMusic = document.getElementById("bgMucsic");
$("#startBtn").click(function () {

    bgMusic.play();
    $("#gameOver").css("display", "none");
    $("#name").css("display", "none");
    character.style.top = 100 + "px";
    $("#hdiv").css("display", "none");
    $("#dashBoardContent").css("display", "none");
    $("#content").css("display", "block");
    hole.addEventListener('animationiteration', () => {
        var random = -((Math.random() * 300) + 150);
        hole.style.top = random + "px";
        counter++;
    });
    var highsScore = 0;
    $("#addName").click(function () {
       var go= setInterval(function () {


            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

            if (jumping === 0) {
                character.style.top = (characterTop + 3) + "px";
            }


            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
            var cTop = -(500 - characterTop);
            if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
                // alert("Game over. Score: " + (counter - 1));
                //$("#addName").text("Start");
                character.style.top = 100 + "px";
                counter = 0;
                $("#gameOver").css("display", "block");
                bgMusic.pause();
                playSound();
                clearInterval(go);

            }

            if (highsScore < counter) {
                highsScore = counter;
                $("#highscore").text(("Best Score :" + (highsScore)))
            }
            $("#score").text(("Score :" + (counter)))
        }, 10);


    });
});


function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 4) + "px";
        }


        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}

$("#help").click(function () {

    $("#help").css("display", "none");
    $("#hdiv").css("display", "block");
    $("#colorPicker").css("display", "none");
    $(".img1").css("display", "none");
});
$("#hdiv").click(function () {

    $("#help").css("display", "block");
    $("#hdiv").css("display", "none");
    $("#colorPicker").css("display", "block");
    $(".img1").css("display", "block");
});

$("#addName").click(function () {
    if ($("#player").val().length === 0) {
        $("#player").css("display", "none");
        $("#name").css("display", "block");
        $("#name").text("Click to Enter Name");
    } else {
        $("#name").text($("#player").val());
        $("#name").css("display", "block");
        $("#player").css("display", "none");

    }
});

$("#name").click(function () {

    $("#player").css("display", "block");
    $("#name").css("display", "none");
    $("#player").val("");
});
/* character color change part*/
$("#changeColor").css("display", "none");

$("#colorPicker").click(function () {
    $("#changeColor").css("display", "block");
    $("#colorPicker").css("display", "none");
    $(".img1").css("display", "none");
});
$("#changeColor").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $(".img1").css("display", "block");
});
$("#c1").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "red");

});
$("#c2").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "darkcyan");
});
$("#c3").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "orange");
});
$("#c4").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "deeppink");
});
$("#c5").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "fuchsia");
});
$("#c6").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "#3f341e");
});
$("#c7").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "#9c5e35");
});
$("#c8").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "#5f1d11");
});
$("#c9").click(function () {
    $("#changeColor").css("display", "none");
    $("#colorPicker").css("display", "block");
    $("#character").css("background-color", "#032d5d");
});
/*------------*/

$("#gameOver").click(function () {
    $("#gameOver").css("display", "none");
    $(".img1").css("display", "block");
    $("#soundOn").css("display", "block");
    $("#soundOff").css("display", "block");
});
var sound = document.getElementById("audio");

function playSound() {
    $(".img1").css("display", "none");
    sound.play();
}

/*$("#soundOn").css("display", "block");
$("#soundOff").css("display", "none");*/

$("#soundOn").click(function () {
    bgMusic.pause();
    $("#soundOn").css("display", "none");
    $("#soundOff").css("display", "block");
});
$("#soundOff").click(function () {

    bgMusic.play();
    $("#soundOn").css("display", "block");
    $("#soundOff").css("display", "none");
});
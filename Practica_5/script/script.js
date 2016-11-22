$(document).ready(init);

var ship = $("<img src='img/rocket.png'/>");
var interval;
var points = 0;

function init() {
    ship.css("position", "absolute");
    $("#map").append(ship);
    $("#sendUserData").click(saveUserData);
}

function saveUserData() {

    if ($("#userName").val() == "") {
        var warning = $("<p class='alert-danger'><strong>Input value must not be empty!</strong></p>");
        $("#userData").append(warning);
    } else {
        $.ajax({
            type: "POST",
            url: "script/response.php",
            dataType: "json",
            data: {userName: $("#userName").val()},
            success: function (response) {
                alert(response.users);
            }
        });
    }
}

function initGame() {
    $("#start").css("display", "none");
    $("#pause").show();
    $("#restart").show();

    $("#pause").click(pauseGame);
    $("#restart").click(restartGame);

    $(document).keydown(function (e) {
        switch (e.which) {
            case 37:
                ship.stop().animate({
                    left: '-=30'
                }); //left arrow key
                break;
            case 38:
                ship.stop().animate({
                    top: '-=30'
                }); //up arrow key
                break;
            case 39:
                ship.stop().animate({
                    left: '+=30'
                }); //right arrow key
                break;
            case 40:
                ship.stop().animate({
                    top: '+=30'
                }); //bottom arrow key
                break;
            case 87:
                ship.stop().animate({
                    top: '-=30'
                }); //w key
                break;
            case 65:
                ship.stop().animate({
                    left: '-=30'
                });//a key
                break;
            case 83:
                ship.stop().animate({
                    top: '+=30'
                }); //s key
                break;
            case 68:
                ship.stop().animate({
                    left: '+=30'
                });//d key
                break;
        }
    });
    asteroidLoop();
}

function pauseGame() {
    $("#pause").css("display", "none");
    $("#restart").css("display", "none");
    $("#start").show();
    $("#start").click(initGame);

}

function restartGame() {
    $("#pause").css("display", "none");
    $("#restart").css("display", "none");
    $("#start").show();
    $("#start").click(initGame);
}

function setPropertiesAsteroid(asteroid, random) {
    asteroid.css({
        "position": "absolute",
        "width": "43px",
        "height": "50px",
        "top": random + "px",
        "left": $(map).width() - 50
    });
}

function asteroidLoop() {
    interval = setInterval(moveAsteroid, 3000);
}

function moveAsteroid() {
    //consulta ajax y con la respuesta generar el meteorito.
    $.ajax({
        type: "POST",
        url: "script/response.php",
        dataType: "json",
        data: {height: $("#map").css("height")},
        success: function (response) {
            //alert(response.random);
            var asteroid = $("<img src='img/donald.png'/>");
            setPropertiesAsteroid(asteroid, response.random);
            $("#map").append(asteroid);

            asteroid.animate(
                    {
                        "left": "-30"
                    },
                    {
                        duration: 2000,
                        step: function (now, fx) {
                            //puntuacion
                            $("#points").html(points);
                            //comprobar colision
                            if ($(asteroid).hittest($(ship))) {
                                asteroid.remove();
                                $("#shield").animate({
                                    "width": "-=20"
                                },
                                        {
                                            step: function (now, fx) {
                                                if ($("#shield").width() == 0) {
                                                    clearInterval(interval);
                                                    ship.stop();
                                                    alert("GAME OVER");
                                                }
                                            }
                                        });
                            }
                        },
                        complete: function () {
                            points++;
                            asteroid.remove();
                        }
                    })
        }
    });
}
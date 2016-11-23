$(document).ready(start);
var source = 0;
var lista;
function start() {
    $("#boton").click(nombre);
    $("#start").click(start2);
}
function nombre() {

    var nombre = $("#nombre").val();
    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"nombre": nombre, "puntuacion": 0},
        success: function (respuesta) {
            source = respuesta.posicion;
            puntos();
        }

    });
}
function puntos() {

    $.ajax({
        type: "POST",
        url: "espacio.php",
        dataType: "json",
        data: {"lista": "lista"},
        success: function (respuesta) {
           // lista = JSON.parse(respuesta);
            //console.log( array);
        //    usuarios();
         console.log(respuesta.jug);
         
         var elem = "<ul>";
            for(var nombre in respuesta.jug){
                
                elem += "<li>Nombre: " + respuesta.jug[nombre].nombre + " - Puntos: " + respuesta.jug[nombre].puntos + "</li>";
            }
            elem += "</ul>";
            console.log(elem);
             $("#tabla").prepend(elem);
             $("#start").fadeIn();
             
            //$("#tabla").append("<button id='start'>Start</button>");
        }
    });
}
/*function usuarios(){
    
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i].nombre);
        var elem = "<ul><li>" + lista[i].nombre + "</li><li>" + lista[i].puntos + "</li></ul>";
        elem.appendTo('#tabla');
    }
    //$("#tabla").html("<button id='start'>Start</button>");
}*/
function start2(){
    
    $("#puntos").fadeOut();
    $("#espai").fadeIn();
    
    
}
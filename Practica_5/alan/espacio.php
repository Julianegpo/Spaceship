<?php

session_start();


if (isset($_POST['lista']) && isset($_SESSION["array"])) {
    //{"nombre":"valor","":""}
    //echo "{".json_encode($_SESSION["array"])."}";
    $resultado = count($_SESSION["array"]);
    $respuesta= '{"jug":[';
    for ($i = 0; $i < $resultado; $i++) {
        $nombre =  $_SESSION["array"][$i][0];
        $puntos =  $_SESSION["array"][$i][1];
      $respuesta.=  '{"nombre":"'. $nombre .'","puntos":"'. $puntos .'"},';
    
    }
     $respuesta.='{"nombre":"","puntos":""}]}';
     echo $respuesta;
    exit();
}
if (!isset($_SESSION["array"])) {
    $arr[0][0] = $_POST['nombre'];
      $arr[0][1] = 0;
    $_SESSION["array"] = $arr;
    $respuesta = '{"posicion":"' . 0 . '"}';
    // echo $_SESSION["array"][0][0];
    echo $respuesta;
} else {
    //   echo $_SESSION["array"][0][0];
    if ($_POST['puntuacion'] == 0) {
        $resultado = count($_SESSION["array"]);
        $_SESSION["array"][$resultado][0] = $_POST['nombre'];
        $_SESSION["array"][$resultado][1] = 0;
        $respuesta = '{"posicion":"' . $resultado . '"}';
        echo $respuesta;
    } else {
        $resultado = $_POST['posicion'];
        $_SESSION["array"][$resultado][1] = $_POST['puntuacion'];
    }
}
?>
<?php

session_start();
$users = array();
$_SESSION["user"] = $_POST["userName"];
$code = $_POST["code"];

if ($code == 1) {
    
} else {
    $mapHeight = $_POST["height"];
    $random = rand(0, intval($mapHeight));

    $response = '{"random":"' .$random .'"}';
}
echo $response;
?>
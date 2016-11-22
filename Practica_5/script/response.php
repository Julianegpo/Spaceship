<?php

$_SESSION["user"] = $_POST["userName"];
$mapHeight = $_POST["height"];

$users=array();
array_push($users, $_SESSION["user"]);

$random = rand(0, intval($mapHeight));

$response = '{"random":"'.$random.'",'
        . '"users":"'.$users.'"}';
echo $response;
?>
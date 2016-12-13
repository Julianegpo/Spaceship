<?php
$ships=array();

$ships[0] = "<img src='img/ship01.png'/>";
$ships[1] = "<img src='img/ship02.png'/>";
$ships[2] = "<img src='img/ship03.png'/>";

$random = rand(0, count($ships)-1);

$response = '{"ship":"'.$ships[$random].'"}';
echo $response;
?>
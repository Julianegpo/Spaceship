<?php
$mapHeight = $_POST["height"];
$random = rand(0, intval($mapHeight));

$response = '{"random":"' . $random . '"}';

echo $response;
?>
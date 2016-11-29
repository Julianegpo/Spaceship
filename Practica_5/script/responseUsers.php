<?php
session_start();
$response = '{"users":[';
if (!isset($_SESSION["users"])) {
    $user = array();
    $user[$_POST["userName"]] = 0;
    $_SESSION["users"] = $user;
} else {
    $users = $_SESSION["users"];
    $users[$_POST["userName"]] = 0;
    $_SESSION["users"] = $users;
    
    //var_dump($users);
    foreach($users as $user=>$puntuacion){
        //echo $user."\n";
        $response.='{"name":"'.$user.'", "score":"'.$puntuacion.'"},';
    }
     $response.='{"name":"", "score":""}';
}
$response.=']}';
echo $response;
?>
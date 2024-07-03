<?php
session_start();

if(isset($_SESSION["actuser"]))
{
    $answer["username"]=$_SESSION["actuser"]["customer_name"];

}
else
{
    $answer["username"]="";
}
echo(json_encode($answer));
?>
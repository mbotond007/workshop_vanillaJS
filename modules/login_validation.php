<?php
session_start();

include("../connect.php");

$loginerror=array();

$loginerror["login_error_1"]="0";

$loginerror["login_error_2"]="0";

$answer=array();

$st=$connection->prepare("select * from customers where email=?");

$st->bind_param("s", $_POST["email"]);

$st->execute();

$return=$st->get_result(); 

$pass_encrypted=md5(md5($_POST["password"]));

if(mysqli_num_rows($return) == 0)
{
	$loginerror["login_error_1"]="1";
	$answer=$loginerror;
}
if(mysqli_num_rows($return) == 1)
{
	$array=mysqli_fetch_assoc($return);
	if($array["password"]==$pass_encrypted)
		{
			$answer["feedback"]="Sikeres bejelentkezés"; 
			$_SESSION["actuser"]=$array;
			$answer["username"]=$_SESSION["actuser"]["customer_name"];		
		}
	else
		{
			$loginerror["login_error_2"]="1";
			$answer=$loginerror;
		}	
}
else
{
	$answer["feedback"]="Ismeretlen hiba";
}

echo(json_encode( $answer));
?>

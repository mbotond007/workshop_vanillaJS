<?php

include("../connect.php");

$result=$connection->query("select category_id, category_name_hun, category_name_eng from category");

$answer=array();

while($row=mysqli_fetch_assoc($result))
{
	array_push($answer, $row);
}

echo(json_encode($answer));

?>

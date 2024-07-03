<?php
include("../connect.php");

$result=$connection->query("select container_id, container_type, content_hun, content_eng  from containers");

$answer=array();

while($row=mysqli_fetch_assoc($result))
{
	array_push($answer, $row);
}

echo(json_encode($answer));
?>
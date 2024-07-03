<?php
include("../connect.php");

$regerror=array();

$answer=array();

$regerror["reg_error_1"]="0";

$regerror["reg_error_2"]="0";

$st=$connection->prepare("select * from customers where email=?");

$st->bind_param("s", $_POST["email"]);

$st->execute();

$return=$st->get_result(); 

if(mysqli_num_rows($return) != 0)
{
    $regerror["reg_error_1"]="1"; 
}

$st=$connection->prepare("select * from customers where customer_name=?");

$st->bind_param("s", $_POST["customer_name"]);

$st->execute();

$return=$st->get_result(); 

if(mysqli_num_rows($return) != 0)
{
    $regerror["reg_error_2"]="1"; 
}

if($regerror["reg_error_1"]!="1" and $regerror["reg_error_2"]!="1")
{
    $fields=array();

    $values=array();

    foreach( $_POST as $field=>$value )
    {
        array_push( $fields,$field);
        
        if( $field=="password" )
        {
            array_push( $values,md5(md5($value)) );
        }
        else
            array_push( $values,$value);
    }

    $pcs="insert into customers (".implode(",",$fields).") values('".implode("','",$values)."')";

    if( $connection->query( $pcs ) )

    {
        $answer["feedback"]="ok"; 
        
        //$regerror["reg_error_3"]="0";
    }
    else
    {
        $answer["feedback"]=""; 

        //$regerror["reg_error_3"]="1";        
    }
}
else
{
    $answer= $regerror;
}

echo( json_encode( $answer ) );

?>
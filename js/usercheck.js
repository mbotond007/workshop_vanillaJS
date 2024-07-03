function usercheck()
{
    var user_name="";

    $.ajax(
        {
            url:"modules/usercheck.php" 
            ,
            dataType:"json"  
            ,
            type:"POST" 
            ,
            data: {}
            ,
            async: false
            ,
            success:function(answer)	
            {
                user_name=answer.username;  
                //alert("user: "+user_name);              
            }
        });
   
    //alert("user_name: "+user_name);
    return user_name;
}

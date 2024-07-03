$(document).ready(
	function()
	{
			
		$(".check_login").click(
		function()
		{if(usercheck()!="")
            {alert("belépve egy felhasználó")}
        else
            {alert("nincs belépvefelhasználó")}
        });
    });
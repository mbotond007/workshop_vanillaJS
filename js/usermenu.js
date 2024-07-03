function usermenu_load(array)
{
        //console.log(array.username);        
        if(array.username=="")
        {
            load_usermenu();
        }
        else
        {
            load_usermenu_login(array.username);
        }


}



function load_usermenu()
    {
        //alert("no user logged in");
        document.getElementById('main_menu_right').innerHTML='';
        //$("#main_menu_right").empty();

        fetch("templates/usermenu.php")
        .then(response => response.text())
        .then(temp_return => {
		
            var tempElement = document.createElement('div');
    
            tempElement.innerHTML = temp_return;
    
            while (tempElement.firstChild) {
                document.getElementById('main_menu_right').appendChild(tempElement.firstChild);
            }

            show_content( document.getElementById("act_language").innerHTML);

            if(document.getElementById('main_menu_right').querySelector("#reg_button"))
                {
                    document.getElementById('main_menu_right').querySelector("#reg_button").addEventListener('click', function() 
                    {
                        registry();
                    });
                }
            if(document.getElementById('main_menu_right').querySelector("#login_button"))
                {
                    document.getElementById('main_menu_right').querySelector("#login_button").addEventListener('click', function() 
                    {
                        login();
                    });
                }
        });
        
        /*
        $.get("templates/usermenu.php" , function(temp_return)
        {
            var tempobj=$().add(temp_return);
            
            tempobj.appendTo( $("#main_menu_right") );
            
            show_content( $("#act_language").html());

            tempobj.find("#reg_button").click(
            function()
            {
                registry();
            });
            
            tempobj.find("#login_button").click(
            function()
            {
                login();
            });
        });
        */
    }

function load_usermenu_login(user)
    {
        document.getElementById('main_menu_right').innerHTML='';

        fetch("templates/usermenu_login.php")
        .then(response => response.text())
        .then(temp_return => {
		
            var tempElement = document.createElement('div');
    
            tempElement.innerHTML = temp_return;
    
            while (tempElement.firstChild) {
                document.getElementById('main_menu_right').appendChild(tempElement.firstChild);
            }

        show_content( document.getElementById("act_language").innerHTML);

        if(document.getElementById('main_menu_right').querySelector("#username"))
            {
                document.getElementById('main_menu_right').querySelector("#username").innerHTML=user; 
            }
        });
        
        /*
        $.get("templates/usermenu_login.php" , function(temp_return)
        {
            var tempobj=$().add(temp_return);
            
            tempobj.appendTo( $("#main_menu_right") );

            show_content( $("#act_language").html());

            tempobj.find("#username").html(user);
            
        });
        */
    }

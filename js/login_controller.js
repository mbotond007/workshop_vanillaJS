function login()
{
	for (const element of document.getElementsByClassName("category_menu_button")) {
		element.classList.remove("search_button", "signed");
	}
	
	document.getElementById('act_category').innerHTML = '';

	localStorage.removeItem("actCat");
	
	document.getElementById('topic_box').innerHTML = '';
	
	document.getElementById('topic_box').style.display = 'none';
	
	document.getElementById('content_box').innerHTML = '';
	
	fetch("templates/login_template.php")
	.then(response => response.text())
	.then(temp_return => {
		
		var tempElement = document.createElement('div');

		tempElement.innerHTML = temp_return;

		while (tempElement.firstChild) {
			document.getElementById("content_box").appendChild(tempElement.firstChild);
		}

		var loginForm = document.getElementById("login_form_div");

		show_content(document.getElementById("act_language").innerHTML);	

		var loginSubmitButton = loginForm.querySelector("#loginsubmit");
		
		if (loginSubmitButton) 
		{
            loginSubmitButton.addEventListener('click', function() {
                if (logincheck(loginForm)) 
                {
                    login_validation(loginForm);
                }
            });
        }


	});
}

function logincheck(form)
{
	var failure=false;

	document.querySelectorAll('.failure_box').forEach(function(element) {
		element.remove();
	});
    
    var i=0;

    for (const element of form.querySelectorAll(".input_box"))
    {

        if (element.dataset.must_fillout=="true" && element.value.trim() == "") 
        {
            var failureBox = `
            <DIV class='failure_box'id='must_fillout_error${i}'></DIV>
            `;
            element.insertAdjacentHTML('afterend', failureBox);

            failure = true;

            i++;
        }
    }

    show_content( document.getElementById("act_language").innerHTML);

    return !failure;    
}


function login_validation(form)
{
	var fields=form.querySelectorAll(".input_box");
	
	var fieldsPost= new FormData();
	
	for( var i=0; i<fields.length ; i++ )
	{
		fieldsPost.append(fields[i].dataset.field, fields[i].value.trim());
        
	}


	
	fetch("modules/login_validation.php", {
		method: "POST",
		body: fieldsPost
	})
	.then(response => response.json())
	.then(answer => {

		if(answer.login_error_1=="1")
			{
				var oneError=`
				<DIV class='failure_box err_box' id='loginerror1'></DIV>
				`;
				document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);
							   
			}
		if(answer.login_error_2=="1")
			{
				var oneError=`
				<DIV class='failure_box err_box' id='loginerror2'></DIV>
				`;
				document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);
			}
			if(answer.username)
			{
			
			document.getElementById('content_box').innerHTML = '';

			var oneError=`
				<DIV class='failure_box err_box' id='login_success'></DIV>
				`;
				document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);

				usercheck2(usermenu_load);
			}

		show_content(document.getElementById("act_language").innerHTML);
	})
	.catch(error => {
		console.error('Error:', error);
	});
	
	
}


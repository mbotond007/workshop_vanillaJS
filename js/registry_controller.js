function registry()
{
	for (const element of document.getElementsByClassName("category_menu_button")) {
        element.classList.remove("search_button", "signed");
    }
    
    document.getElementById('act_category').innerHTML = '';

    localStorage.removeItem("actCat");
    
    document.getElementById('topic_box').innerHTML = '';
    
    document.getElementById('topic_box').style.display = 'none';
    
    document.getElementById('content_box').innerHTML = '';


    fetch("templates/reg_template.php")
    .then(response => response.text())
    .then(temp_return => {
        
        var tempElement = document.createElement('div');

        tempElement.innerHTML = temp_return;

        while (tempElement.firstChild) {
           document.getElementById("content_box").appendChild(tempElement.firstChild);
        }

        var regForm = document.getElementById("reg_form_div");

        show_content(document.getElementById("act_language").innerHTML);
		
		var regSubmitButton = regForm.querySelector("#regsubmit");
        if (regSubmitButton) {
            regSubmitButton.addEventListener('click', function() {
                if (regcheck(regForm)) 
                {
                    registry_validation(regForm);
                }
            });
        }
    })
    .catch(error => console.error('Error fetching the template:', error));
	
}

function regcheck(form)
{
	var failure=false;
	
    document.querySelectorAll('.failure_box').forEach(function(element) {
        element.remove();
    });    

    if(form.querySelector("#regpass").value.length<=5)
        {
            var oneError=`
            <DIV class='failure_box err_box' id='pass_short_error'></DIV>
            `;
            document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);

            failure=true;
        }
    if (form.querySelector("#regpass").value!=form.querySelector("#regpass2").value)
        {
            var oneError=`
            <DIV class='failure_box err_box' id='pass2_error'></DIV>
            `;
            document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);

            failure=true;
        }
    
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

function registry_validation(form)
{
    var fields=form.querySelectorAll(".input_box");
	
	var fieldsPost= new FormData();
	
	for( var i=0; i<fields.length ; i++ )
	{
		if(fields[i].dataset.field!="regpass2")
            {
            fieldsPost.append(fields[i].dataset.field, fields[i].value.trim());
            }
	}


	fetch("modules/registry_validation.php", {
		method: "POST",
		body: fieldsPost
	})
	.then(response => response.json())
	.then(answer => {					
                    if(answer.reg_error_1=="1")
                        {
                            var oneError=`
                            <DIV class='failure_box err_box' id='regerror1'></DIV>
                            `;
                            document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);
                                           
                        }
                    if(answer.reg_error_2=="1")
                        {
                            var oneError=`
                            <DIV class='failure_box err_box' id='regerror2'></DIV>
                            `;
                            document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);
                        }
                    if(answer.feedback=="ok")
                        {
                        
                        document.getElementById('content_box').innerHTML = '';

                        var oneError=`
                            <DIV class='failure_box err_box' id='registry_success'></DIV>
                            `;
                            document.getElementById("content_box").insertAdjacentHTML('beforeend', oneError);
                        }
                       
                        show_content(document.getElementById("act_language").innerHTML);
				})
    .catch(error => {
        console.error('Error:', error);
    });
}
		 



/*$(document).ready(
    function()
    { */

document.addEventListener("DOMContentLoaded", () => 
    {
        document.getElementById("search_button").addEventListener('click', function()
        {	
            for (const element of document.getElementsByClassName("category_menu_button")) {
                element.classList.remove("search_button", "signed");
            }
            
            document.getElementById('act_category').innerHTML = '';
        
            localStorage.removeItem("actCat");
            
            document.getElementById('topic_box').innerHTML = '';
            
            document.getElementById('topic_box').style.display = 'none';
            
            document.getElementById('content_box').innerHTML = '';
            
            var searchBox = `
            <div class='search_box' id='search_box'></div>
            `;
            document.getElementById("content_box").insertAdjacentHTML('beforeend', searchBox);
            
            var inputBox = `
            <input type='text' placeholder='' name='search_topic' id='search_topic'>
            `;
            document.getElementById("search_box").insertAdjacentHTML('beforeend', inputBox);
            		
            show_content( document.getElementById("act_language").innerHTML);

            search_engine();
        });
    });
      
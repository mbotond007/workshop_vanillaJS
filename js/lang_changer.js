document.addEventListener("DOMContentLoaded", () => {
   
 
        if(document.getElementById("act_language").innerHTML=="")
            {
                document.cookie = "actlang = hun";

                document.getElementById("act_language").innerHTML="hun";

                document.getElementById("flag_hun").classList.add("signed");
                
                localStorage.clear();

                content_return( document.getElementById("act_language").innerHTML);

                usercheck2(usermenu_load);

                category_menu(document.getElementById("act_language").innerHTML);
            }
        
        for (const element of document.getElementsByClassName("flag"))
        {element.addEventListener("click",  function()
            {
                for (const element of document.getElementsByClassName("flag")){element.classList.remove("signed")};

                element.classList.add("signed");

                //if(document.getElementById("search_box")){document.getElementById("content_box").removeChild(document.getElementById("content_box").firstChild)}

                // Remove the element with id "search_result"
                var searchResult = document.getElementById("search_result");
                if (searchResult) {
                    searchResult.remove();
                }

                // Set the value of the input with id "search_topic" to an empty string
                var searchTopic = document.getElementById("search_topic");
                if (searchTopic) {
                    searchTopic.value = "";
                }


                list_categories(element.dataset.language);

                //document.cookie = $("#act_language").html()+"Categ="+$("#cat_"+$("#act_category").html()).html();

                document.getElementById("act_language").innerHTML=element.dataset.language;

                document.cookie = "actlang = "+element.dataset.language;

                if(document.getElementById("act_category").innerHTML!="")
                {
                    show_topics(document.getElementById("act_language").innerHTML);
                }
                    
                show_content( element.dataset.language);
            });
        
        }
});  

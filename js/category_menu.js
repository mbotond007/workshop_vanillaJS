function category_menu(language)
{
    fetch("modules/category_menu.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(answer => {
        localStorage.setItem("categList", JSON.stringify(answer));
        list_categories(language);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}

function list_categories(language)
{
    document.getElementById("category_menu_inside").innerHTML='';

    var categoryList=JSON.parse(localStorage.getItem("categList"));
 
    for(const elem of categoryList)
        {
            var categoryName = "category_name_" + language;  

            var categObj = document.createElement('div');
            categObj.className = 'category_menu_button';
            categObj.id = 'cat_' + elem["category_id"];
            categObj.innerHTML = elem[categoryName];

            categObj.dataset.catid = elem["category_id"];

            document.getElementById("category_menu_inside").appendChild(categObj);

            //console.log(categObj);
            //console.log(typeof categObj);
            
            categObj.addEventListener('click', function()
            {
                
                document.getElementById("act_category").innerHTML = elem["category_id"];
            
                localStorage.setItem("actCat", JSON.stringify(elem));
                          
                for (const element of document.getElementsByClassName("category_menu_button")){element.classList.remove("search_button","signed")};
                
                //var id='cat_' + elem["category_id"];
                //document.getElementById(id).classList.add("search_button", "signed");
                
                this.classList.add("search_button", "signed");
            
                topics_by_category(elem["category_id"], document.getElementById("act_language").innerHTML);
            });
        }

    if(localStorage.getItem("actCat"))
        {
            var actCategId='cat_'+ JSON.parse(localStorage.getItem("actCat"))["category_id"];    

            document.getElementById(actCategId).classList.add("search_button", "signed");
        }
    
}

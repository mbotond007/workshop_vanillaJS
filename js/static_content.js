function content_return(language)
{
    fetch("modules/static_content.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(answer => {
        localStorage.setItem("contentList", JSON.stringify(answer));
        show_content(language);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

function show_content(language)
{
    var contentList=JSON.parse(localStorage.getItem("contentList"));

    //console.log(contentList);

    var content= "content_"+language;

    for(const elem of contentList)
    {
        //console.log(elem.container_id);
        
        var container=document.getElementById(elem.container_id);

        if(container)
        {

            //console.log(container);

            if(elem.container_type=="html")
            {
                container.innerHTML=elem[content];
                //$("#"+elem.container_id).html(elem[content]);
            }
            else if(elem.container_type=="input")
            {
                container.setAttribute('placeholder', elem[content]);
                //$("#"+elem.container_id).attr("placeholder", elem[content]);
            }
            else if(elem.container_type=="img")
            {
                container.setAttribute('src', elem[content]);
                //$("#"+elem.container_id).attr("src", elem[content]);
            }
            else if(elem.container_type=="submit")
            {
                container.value= elem[content];
                //$("#"+elem.container_id).val(elem[content]);
            }
        
        }
    }
}  
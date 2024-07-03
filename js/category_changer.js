function topics_by_category(category,language)
{
    // Create a FormData object
const formData = new FormData();
formData.append("category_id", category);
//formData.append("language", language);

fetch("modules/show_category_topics.php", {
    method: "POST",
    body: formData
})
.then(response => response.json())
.then(answer => {
    localStorage.setItem("topicList", JSON.stringify(answer));
    show_topics(language);
})
.catch(error => {
    console.error('Error:', error);
});

    
}

function show_topics(language)
{
    document.getElementById("topic_box").innerHTML='';
    document.getElementById("topic_box").style.display='block';
    document.getElementById("content_box").innerHTML='';

    var actCateg=JSON.parse(localStorage.getItem("actCat"))["category_name_"+language];
    
    var topicList=JSON.parse(localStorage.getItem("topicList"));

    var topicLabelHTML = `
        <div class="topic_label">
            <div class="topic" style="cursor:default" id="topic_label1"></div>
            <div class="topic" style="color:red; cursor:default">${actCateg}</div>
            <div class="topic" id="topic_label2" style="cursor:default"></div>
        </div>
        <br>
    `;

    document.getElementById("topic_box").insertAdjacentHTML('beforeend', topicLabelHTML);



    show_content(document.getElementById("act_language").innerHTML);

    /*
    for(const elem of topicList)
        {
            $("<div class='topic'>"+elem['topic_name_'+language]+"</div><br>").appendTo($("#topic_box"));
        }
     */

    for(const elem of topicList)
        {
            var oneTopic=`
            <div class='topic'>${elem['topic_name_'+language]}</div><br>
            `;
            document.getElementById("topic_box").insertAdjacentHTML('beforeend', oneTopic);
        }

}







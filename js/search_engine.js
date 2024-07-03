function search_engine()
{
    
    if (document.readyState !== 'loading')
    {
        //console.log('DOM fully loaded and parsed');
        document.getElementById('search_topic').addEventListener('keyup', function()
        {
            //console.log('Keyup event detected');
            if( document.getElementById("search_topic").value.length >=3)
            {
                //console.log('Keyup event detected');
                
                if(document.getElementById("search_result")){
                    document.getElementById("search_result").remove();   
                }

                const formData = new FormData();
                formData.append("keyword", document.getElementById("search_topic").value.trim());
                formData.append("language", document.getElementById("act_language").innerHTML);

                fetch("modules/search_topic.php", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(answer => {
                    
                            var searchResult=`
                            <DIV class='search_result' id='search_result' ></DIV>
                            `;
                            document.getElementById('search_topic').insertAdjacentHTML('afterend', searchResult);

                            //$("<DIV class='search_result' id='search_result' ></DIV>").insertAfter( $("#search_topic") );

                            document.getElementById('search_result').innerHTML='';
                            
                          /*  $.each(answer, function(idx, item)
                            {
                                $("<div class='one_result'>"+item.topic_name+"</div>").appendTo( $("#search_result")).click(
                                function()
                                {
                                    $("#search_topic").val(item.topic_name);
                                    $("#search_result").remove();
                                })				
                                ;
                            }); */

                            answer.forEach(function(item) {
                                var oneResult = document.createElement('div');
                                oneResult.className = 'one_result';
                                oneResult.innerHTML = item.topic_name;
                                document.getElementById('search_result').appendChild(oneResult);
                                oneResult.addEventListener('click', function() {
                                    document.getElementById('search_topic').value = item.topic_name;
                                    document.getElementById('search_result').remove();
                                });
                            });
                             
                        })
                .catch(error => {
                    console.error('Error:', error);
                });
            }     
                
 
        });
        
        
        
  }
  //);
}
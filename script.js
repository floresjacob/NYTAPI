// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"


$("#search_term").on("submit", function(){
    event.preventDefault()
    
    //input from user
    q = $("#query").val()
    
    //url with input
    url += '?' + $.param({
        'api-key': "09d4fe2e895645a8a374961714e199f4",
        'q': q
      })
    
    console.log("this: " + $("#query").val())
    console.log("hit")
    
    //ajax call
    $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        console.log(result);
        for(var i = 0; i < result.response.docs.length; i++){
            console.log(result.response.docs[0])
        }
            console.log(result.response.docs.length)
      }).fail(function(err) {
        throw err;
      });
})


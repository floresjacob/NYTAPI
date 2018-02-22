// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"


$("#search_term").on("submit", function(){

    event.preventDefault()
    console.log("hit")

    //input from user
    q = $("#query").val()
    recNum = $("#recordsNum").val()
    bDate = $("#startYear").val()
    eDate = $("#endYear").val()

    //url with input
    url += '?' + $.param({
        'api-key': "09d4fe2e895645a8a374961714e199f4",
        'q': q,
        'page': recNum,
        'begin_date': bDate,
        'end_date': eDate
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
            console.log(result.response.docs[i])
            $("#title").append("<h3>" + result.response.docs[i].headline.main + "</h3>")
            if(result.response.docs[i].byline.person !== []){  
              $("#title").append("<h5>" + result.response.docs[i].byline.original + "</h5>")
              console.log(result.response.docs[i].byline.original)
            }
            else{
              $("#title").append("<h5>" + result.response.docs[i].byline.original + "</h5>")
              console.log(result.response.docs[i].byline.original)
            }
            
        }
            console.log(result.response.docs.length)
      }).fail(function(err) {
        throw err;
      });
})


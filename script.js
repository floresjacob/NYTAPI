// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

var glyphs = ["glyphicon-star", "glyphicon-trash", "glyphicon-headphones", "glyphicon-camera", "glyphicon-road", "glyphicon-flag"]

$("#search_term").on("submit", function(){

    event.preventDefault()
    console.log("hit")

    //input from user
    q = $("#query").val()
    // recNum = $("#recordsNum").val()
    // bDate = $("#startYear").val()
    // eDate = $("#endYear").val()

    //url with input
    url += '?' + $.param({
        'api-key': "09d4fe2e895645a8a374961714e199f4",
        'q': q,
        // 'page': recNum,
        // 'begin_date': bDate,
        // 'end_date': eDate
      })
    
    
    
    //ajax call
    $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        //web_url
        

        for(var i = 0; i < result.response.docs.length; i++){
            console.log(result.response.docs[i].web_url)
            //open span
            $("#title").append("<h2><a href='" + result.response.docs[i].web_url + "'>" + result.response.docs[i].headline.main + "</h2>")
            // if(result.response.docs[i].byline.person !== []){  
            //   $("#title").append("<h5>" + result.response.docs[i].byline.original + "</h5>")
              
            // }
            // else{
            //   $("#title").append("<h5>" + result.response.docs[i].byline.original + "</h5>")
              
            // }
            //close span
            
            
        }
            console.log(result.response.docs.length)
      }).fail(function(err) {
        throw err
      })    
})


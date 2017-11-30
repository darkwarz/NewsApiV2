/*global $ APIKEY*/ //tells the editor "yo chill" the $ is on purpose, don't throw an error message - there's no impact on user experience
$(document).ready(function() { //makes sure everything reads/loads in correct order
    $.ajax({ //ajax call that grabs the sources from api to list infomation
        method: "GET", // always uppercase when making this call
        url: "https://newsapi.org/v2/sources",
        data: { country:"us", language:"en", category: "business", apiKey: APIKEY }, // links API key to github repo
        success: function(data){
                for (var i = 0; i < data.sources.length; i++) {
                    var source = document.createElement("OPTION"); // creates variable drop down
                    source.setAttribute("value", data.sources[i].id); // assigns a value to the option tags
                    source.innerHTML = data.sources[i].name; // applies to the html sources list
                    document.getElementById("selection").appendChild(source); // this goes through the loop to add more options
                }
            }    
        });
    });
        $('#source').submit(function(event) { // creates an event popup listing source
        event.preventDefault();//prevents page refresh
        $.ajax({  // ajax call
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: {sources: (document.getElementById("selection").value), apiKey: APIKEY}, 
            success: function(data){
                console.log(data);
            for (var i = 0; i < data.articles.length; i++) {
                var headlines = document.createElement("LI"); // creates List element
                headlines.innerHTML = data.articles[i].title; // list html option tags
                document.getElementById("headlines").appendChild(headlines); 
            }    
        }
    });
});
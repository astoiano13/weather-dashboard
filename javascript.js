var city = $("#searchbar").val()



$("#searchbutton").on("click", function(){
    clear();
    
    city = $("#searchbar").val()

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a1112586df9166d314deba06702227f9",
        method: "GET"
    }) 
    
    .then(function(response){
        console.log(response)
    }) 


})
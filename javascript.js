var city = $("#searchbar").val()


$("#searchbutton").on("click", function(){
    
    
    city = $("#searchbar").val()
    
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a1112586df9166d314deba06702227f9",
        method: "GET"
    }) 
    
    .then(function(response){
        console.log(response)


        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Humidity: " + tempF.toFixed(2));

    }); 
    
});

localStorage.setItem("city", JSON.stringify("city"));
var city = JSON.parse(localStorage.getItem("city"));
localStorage.clear();




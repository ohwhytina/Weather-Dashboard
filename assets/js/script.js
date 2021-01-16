
var storageIndex = 0;
function saveSearch() {
 
    var searchTerm = $(".form-control").val().replace(" ", "%20");
   
    
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchTerm+ 
        '&appid=56105cac53a463052745b0b32542cbe0' + "&units=imperial"
        )
      .then(function(response) {
        
      return response.json();
      })
      .then(function(response) {
  
        var searchHistory = $("<li>")
       
        .addClass("list-group-item")
        .text(response.name);

        $(".list-group").append(searchHistory);
        
        localStorage.setItem(storageIndex, response.name);
        storageIndex = storageIndex + 1

        $(".currentName").html(response.name);
        $(".currentIcon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".currentTemp").html("Temperature: " + response.main.temp + " F");
        $(".currentHumid").html("Humidity: " + response.main.humidity + "%");
        $(".currentWind").html("Wind: " + response.wind.speed + " mph");
        
        var coordLat = response.coord.lat 
        var coordLon = response.coord.lon

    
        fetch(
        'http://api.openweathermap.org/data/2.5/uvi?lat='
        + coordLat 
        + '&lon=' + coordLon + '&appid=56105cac53a463052745b0b32542cbe0' 
        )
        .then(function(response) {
        
            return response.json();
            })
        .then(function(response) {
            $(".currentUv").html("UV Index: " + response.value);
        
        })
})
};



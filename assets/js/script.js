
var storageIndex = 0;

// when click on search button
function saveSearch() {
 
    var searchTerm = $(".form-control").val().replace(" ", "%20");

    // get current weather information 
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchTerm+ 
        '&appid=56105cac53a463052745b0b32542cbe0' + "&units=imperial"
        )
      .then(function(response) {
        
      return response.json();
      })
      .then(function(response) {
        
        // create list of search history
        var searchHistory = $("<li>")
       
        .addClass("list-group-item")
        .text(response.name);

        $(".list-group").append(searchHistory);
        
        // add to local storage
        localStorage.setItem(storageIndex, response.name);
        storageIndex = storageIndex + 1

        // display current weather information 
        $(".currentName").html(response.name);
        $(".currentIcon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".currentTemp").html("Temperature: " + response.main.temp + " F");
        $(".currentHumid").html("Humidity: " + response.main.humidity + "%");
        $(".currentWind").html("Wind: " + response.wind.speed + " mph");

        // current date 
        var currentDate = moment().format('L');
        $(".currentDate").html(currentDate);
        
        // variable for lat & lon 
        var coordLat = response.coord.lat 
        var coordLon = response.coord.lon

        // get current weather UV 
        fetch(
        'http://api.openweathermap.org/data/2.5/uvi?lat='
        + coordLat 
        + '&lon=' + coordLon + '&appid=56105cac53a463052745b0b32542cbe0'
        )

        .then(function(response) {
        return response.json();
        })
        
        // display UV index information 
        .then(function(response) {
            $(".currentUv").html("UV Index: " + response.value);
        })

        // get current weather UV 
        var searchTerm = $(".form-control").val().replace(" ", "%20");

        fetch(
        'http://api.openweathermap.org/data/2.5/forecast?q='
        + searchTerm +
        '&appid=56105cac53a463052745b0b32542cbe0' + "&units=imperial"
        )

        .then(function(response) {
        return response.json();
        })
        
        // display UV index information 
        .then(function(response) {
            // 1 day after current
            var oneDate = moment(response.list[2].dt_txt).format('L');
            $(".oneDate").html(oneDate)
            $(".oneIcon").html("<img src='https://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(".oneTemp").html("Temperature: " + response.list[2].main.temp + " F");
            $(".oneHumid").html("Humidity: " + response.list[2].main.humidity + "%");

            // 2 days after current
            var twoDate = moment(response.list[11].dt_txt).format('L');
            $(".twoDate").html(twoDate)
            
            $(".twoIcon").html("<img src='https://openweathermap.org/img/w/" + response.list[11].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(".twoTemp").html("Temperature: " + response.list[1].main.temp + " F");
            $(".twoHumid").html("Humidity: " + response.list[11].main.humidity + "%");

            // 3 days after current
            var threeDate = moment(response.list[19].dt_txt).format('L');
            $(".threeDate").html(threeDate)
            
            $(".threeIcon").html("<img src='https://openweathermap.org/img/w/" + response.list[19].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(".threeTemp").html("Temperature: " + response.list[19].main.temp + " F");
            $(".threeHumid").html("Humidity: " + response.list[19].main.humidity + "%");

            // 4 days after current
            var fourDate = moment(response.list[27].dt_txt).format('L');
            $(".fourDate").html(fourDate)
            
            $(".fourIcon").html("<img src='https://openweathermap.org/img/w/" + response.list[27].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(".fourTemp").html("Temperature: " + response.list[27].main.temp + " F");
            $(".fourHumid").html("Humidity: " + response.list[27].main.humidity + "%");

            // 5 days after current
            var fiveDate = moment(response.list[35].dt_txt).format('L');
            $(".fiveDate").html(fiveDate)
            
            $(".fiveIcon").html("<img src='https://openweathermap.org/img/w/" + response.list[35].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(".fiveTemp").html("Temperature: " + response.list[35].main.temp + " F");
            $(".fiveHumid").html("Humidity: " + response.list[35].main.humidity + "%");
        })
})
};



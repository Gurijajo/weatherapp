const apiKey = "d4930b6719082e05a7c3e1250c3f7cf1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const searchForm = document.querySelector(".search");


async function checkWeather(city){
    const response = await fetch(apiUrl + `q=${searchBox.value}`+ `&appid=${apiKey}` + `&units=metric`);
    if(!response.ok){
        document.querySelector(".error").style.display = "block";   
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

        }

    }
    

    searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkWeather(searchBox.value);
    
})


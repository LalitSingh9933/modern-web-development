let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_temperature = document.querySelector(".weather_temperature");
let w_icon = document.querySelector(".weather_icon");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");
let searchForm = document.querySelector(".weather_search");
let searchInput = document.querySelector(".city_name");
let w_feelsLike = document.querySelector(".Weather_feelsLike");
let w_humidity = document.querySelector(".w_humidity");
let w_wind =document.querySelector(".w_wind");
let w_pressure =document.querySelector(".w_pressure")

// Convert country code → full name
const getCountryName = (code) => {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
};

// Convert timestamp → readable date
const getDateTime = (dt) => {
    const curDate = new Date(dt * 1000);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(curDate);
};

// Fetch weather by city
const getWeatherData = async (city = "Kathmandu") => {
    const apiKey = "73e952bcc2ed9d9b2c2994d6bc1b273f";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const res = await fetch(weatherUrl);
        const data = await res.json();

        const { name, sys, dt, main, weather,wind } = data;

        cityName.textContent = `${name}, ${getCountryName(sys.country)}`;
        dateTime.textContent = getDateTime(dt);

        w_forecast.textContent = weather[0].main;
        
        w_temperature.innerHTML = `${Math.round(main.temp)}&#176C`;
        w_minTem.innerHTML = `Min: ${Math.round(main.temp_min)}&#176C`;
        w_maxTem.innerHTML = `Max: ${Math.round(main.temp_max)}&#176C`;
        w_feelsLike.innerHTML = `${Math.round(main.feels_like)}&#176C`;
        w_humidity.innerHTML=`${Math.round(main.humidity)}%`;
        w_pressure.innerHTML=`${Math.round(main.pressure)}hpa`;
         w_wind.innerHTML=`${Math.round(wind.speed)}m/s`;


        // Weather icon
        w_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" />`;

    } catch (error) {
        console.log("City not found");
    }
};

// Search city
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData(searchInput.value);
    searchInput.value = "";
});

// Load default city
window.addEventListener("load", () => {
    getWeatherData();
});

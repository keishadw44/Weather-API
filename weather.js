   
   const city = "Atlanta"
   let cityID;
   
   function getWeatherInfo() {
    console.log("getting weather");

   fetch (
    'https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=8e26f47e399aa8d1fad4ebc7014abeee&degrees=imperial'
   )
    .then((response) => response.json())
    .then((data) => {
    cityID = data.id
    console.log(cityID);
    console.log(city);
    console.log(data.main.temp);
    console.log(data.main.temp.humidity);
    const atlTemp = data.main.temp;
    
const weatherInfoContainer = document.getElementById('weather-info');
weatherInfoContainer.innerHTML = `${atlTemp}` 
});
}

getWeatherInfo(atlTemp);




    // .catch(error => alert("Please add your api key to the fetch url"));
   
   
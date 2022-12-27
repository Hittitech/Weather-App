const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e77712638msh78faa328b48b18ap127dbfjsn77844b24b1ae',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{

    cityName.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed 
        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        temp2.innerHTML=response.temp
        humidity2.innerHTML=response.humidity
        wind_speed2.innerHTML=response.wind_speed
        feels_like2.innerHTML=response.feels_like
            })
	.catch(err => console.error(err));

        }

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
});
getWeather("Hyderabad")
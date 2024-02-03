const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e758985313mshfdbfc7cd6a75a11p113d71jsn5ba6f2ac6332',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
'<link rel="stylesheet" href="t.css">'

const btn = document.getElementById("btn");


const getweather =(a)=> {
//    let a= search.value;
     // Get the span element with id "location"
const locationSpan = document.getElementById("location");
const locationSpan1 = document.getElementById("location1");

// Update the text content of the span element
locationSpan.textContent = a;
locationSpan1.textContent = a;


   console.log("addition is",a);
//    res.innerHTML=a;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +a, options)
	.then(response => response.json())
	.then(response => {
		console.log("this is :",response)
		// cloud_pct  .innerHTML=response.cloud_pct
		temp.innerHTML=response.temp + '°<span class="symbol">C</span>'; 
		// feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		// min_temp.innerHTML=response.min_temp
		// max_temp.innerHTML=response.max_temp
		wind_speed.innerHTML=response.wind_speed
		// sunrise.innerHTML=response.sunrise
		// sunset.innerHTML=response.sunset
	})
	.catch(err => console.error(err));
}


//error
  
// console.log("addition is",a);
  

btn.addEventListener("click",(e)=>{
   e.preventDefault()
   getweather(search.value)
});
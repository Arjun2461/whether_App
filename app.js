let appid="a7cd2f46dc5d9d8f0a69317c3ff096e9";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let cityName=document.querySelector("input").value;
    let weatherdata= await getwhether(cityName);
    showdata(weatherdata);
})

async function getwhether(cityname){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${appid}`;
    try{
        let result = await fetch(url);
        let js=result.json();
        return js;
    }catch(error){
        console.log("Error :- ",error);
    }
}

function showdata(weatherdata ){
   
    
    let name = document.querySelector(".cityname");
    name.innerHTML=weatherdata.name;

    let temp=document.querySelector(".temp");
    temp.innerHTML=`${Math.round(weatherdata.main.temp-273.15)}°C`;

    let condition=document.querySelector("h3");
    condition.innerText=weatherdata.weather[0].description;
    
    let humidity=document.querySelector(".humidity");
    humidity.innerHTML=weatherdata.main.humidity+"%";

    let windspeed =document.querySelector(".Wind");
    windspeed.innerHTML=weatherdata.wind.speed+"Km/h";

    let whetherimg =document.querySelector(".whetherimg");
    console.log(whetherimg);

    switch(weatherdata.weather[0].main){
        case 'Clouds':
            whetherimg.src="img/cloud.png"
                break;
        case 'Clear':
                whetherimg.src="img/clear.png";
                break;
        case 'Rain':
                whetherimg.src="img/rain.png";
                break;
        case 'Snow':
                whetherimg.src="img/snow.png";
                break;
    }

    document.querySelector("input").value="";

}
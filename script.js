
const getcity = document.getElementById('cityName');
const button = document.getElementById('checkweather');
const cityname = document.getElementById('cityname');
const citytemp = document.getElementById('citytemperature'); 
const citycond = document.getElementById('citycondition');
const cityhumidity = document.getElementById('cityhumidity');


button.addEventListener('click', () => {
    const city = getcity.value;
    const apiKey = 'b70bf6aaffd146e1a68132254251107';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url).then(res => res.json()).then(data => {
        cityname.textContent = `City: ${data.location.name}`; 
        citytemp.textContent = `Temperature: ${data.current.temp_c}°C`;
        citycond.textContent = `Condition:${data.current.condition.text}`;
        cityhumidity.textContent = `Humidity:${data.current.humidity}`;
    }).catch(error => {
        console.log("Error Fetching ");
    })
});
function checkConnection(){
    const getStatus = document.getElementById('no-internet');
    if(navigator.onLine){
        getStatus.style.display = "none";
    }else{
        getStatus.style.display = "block";
    }
}
checkConnection();
window.addEventListener('online',checkConnection);
window.addEventListener('offline',checkConnection);

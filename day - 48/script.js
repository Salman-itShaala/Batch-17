// https://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
const cityInput = document.getElementById("city-input");
const tempPara = document.getElementById("temp");
const cityPara = document.getElementById("city");


async function getWeatherData() {
    const city = cityInput.value;

    const res = await fetch(`https://api.weatherstack.com/current?access_key=bb38bbba4dc826b39d6fc20e1b052d2e&query=${city}`);

    const data = await res.json();

    // Dom manupulations
    console.log(data);

    // current.temperature

    tempPara.innerText = `Temprature is : ${data.current.temperature}`;
    cityPara.innerText = `City is : ${data.request.query}`;



}
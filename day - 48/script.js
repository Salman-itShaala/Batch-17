// https://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
const cityInput = document.getElementById("city-input");
const tempPara = document.getElementById("temp");
const cityPara = document.getElementById("city");


async function getWeatherData() {

    try {
        const city = cityInput.value;

        const res = await fetch(`https://api.weatherstack.com/current?access_key=bb38bbba4dc826b39d6fc20e1b052d2e&query=${city}`);

        const data = await res.json();

        tempPara.innerText = `Temprature is : ${data.current.temperature}`;
        cityPara.innerText = `City is : ${data.request.query}`;

    } catch (error) {
        alert("Something went wrong, try again");
        console.log("Something went wrong");
    }

}





// post
async function saveTodo() {
    try {

        const todo = {
            todo: 'This is my tood',
            completed: false,
            userId: 5,
        }

        const res = await fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        })

        const data = await res.json();

        console.log(data);

    } catch (error) {
        alert("someting went wrong");
    }
}
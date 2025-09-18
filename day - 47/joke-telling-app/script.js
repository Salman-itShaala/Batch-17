const setupPara = document.getElementById("setup-para");
const punchlinePara = document.getElementById("punchline-para");


function getJoke() {
    const res = fetch("https://official-joke-api.appspot.com/random_joke");

    res
        .then(data => data.json())
        .then(joke => {
            // dom manipulations
            setupPara.innerText = `setup : ${joke.setup}`;
            punchlinePara.innerHTML = `punchline : ${joke.punchline}`
        })
        .catch(error => console.log(error));

}
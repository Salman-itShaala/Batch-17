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

// async function getJokeWithAsync() {
//     const res = await fetch("https://official-joke-api.appspot.com/random_joke");

//     const data = await res.json();

//     setupPara.innerText = `setup : ${data.setup}`;
//     punchlinePara.innerHTML = `punchline : ${data.punchline}`;
// }
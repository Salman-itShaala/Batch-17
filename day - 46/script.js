// Promise (we can write async js using promises)
// Promise is a js object

function taskA(resolve, reject) {
    // reject("Error message");
    setTimeout(() => {
        resolve("Data");
    }, 4000)

}


const p1 = new Promise(taskA);


p1
    .then((data) => new Promise())
    .then()
    .then()
    .catch((error) => { console.log("From .catch", error) });
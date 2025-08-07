const myPara = document.getElementById("my-para");
const myImg = document.getElementById("my-img");


function addClass() {

    // 1. myPara.className --> limitations
    // myPara.classList --> add(), remover(), contains(), toggle()

    // const isActivePresent = myPara.classList.contains("active")

    // if (isActivePresent) {
    //     myPara.classList.remove("active");
    // } else {
    //     myPara.classList.add("active");
    // }

    myPara.classList.toggle("active");

}


function changeAtt() {

    console.log("Will change att of image")

    myImg.setAttribute("src", "https://static.bhphotovideo.com/explora/sites/default/files/tsc/5a-PENTAX-KF-010.jpg")


    // myImg.getAttribute("alt")

    // myImg.removeAttribute("src")

}
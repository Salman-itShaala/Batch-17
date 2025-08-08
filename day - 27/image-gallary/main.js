const myImage = document.getElementById("my-img");

function changeImg(num) {
    if (num == 1) {
        myImage.setAttribute("src", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    } else if (num == 2) {
        myImage.setAttribute("src", "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    } else if (num == 3) {
        myImage.setAttribute("src", "https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo=")
    } else if (num == 4) {
        myImage.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg")
    } else if (num == 5) {
        myImage.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/053/003/435/small_2x/glowing-red-succulent-plant-in-dark-nature-photo.jpg");
    } else if (num == 6) {
        myImage.setAttribute("src", "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg")
    } else if (num == 7) {
        myImage.setAttribute("src", "https://sustainablehospitalityalliance.org/wp-content/uploads/2024/04/Nature-Positive-Travel-Tourism-in-Action-April-2024_Page_01_Image_0001-e1713779436322.png")
    }
}

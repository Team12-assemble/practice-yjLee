const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];
const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${randomImg}`;
backgroundImg.className = "bg-img";
document.body.appendChild(backgroundImg);

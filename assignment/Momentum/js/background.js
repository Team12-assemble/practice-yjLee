const images = ["img1", "img2", "img3"];

const randomImg = images[Math.floor(Math.random() * images.length)];
const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${randomImg}`;
document.body.appendChild(backgroundImg);

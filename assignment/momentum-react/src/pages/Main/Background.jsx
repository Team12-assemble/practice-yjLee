import "./styles.css";

const Background = ({ children }) => {
  const backgroundImg = [
    require("../../img/img1.jpg"),
    require("../../img/img2.jpg"),
    require("../../img/img3.jpg"),
  ];

  const randomImg =
    backgroundImg[Math.floor(Math.random() * backgroundImg.length)];
  console.log(randomImg);

  return (
    <main className="main" style={{ backgroundImage: `url(${randomImg})` }}>
      {children}
    </main>
  );
};

export default Background;

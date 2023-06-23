import React, { useState } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const ImgSlider = () => {
  const imgs = [img1, img2, img3];
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevBtn = () => {
    setSlideIndex((prev) => (slideIndex === 0 ? imgs.length - 1 : prev - 1));
  };
  const handleNextBtn = () => {
    setSlideIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container">
      <div className="imgBox">
        <img src={imgs[slideIndex]} alt="slider" style={{ width: "300px" }} />
      </div>
      <button onClick={handlePrevBtn}>이전</button>
      <button onClick={handleNextBtn}>다음</button>
    </div>
  );
};

export default ImgSlider;

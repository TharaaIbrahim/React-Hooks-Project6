import React from "react";
import { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
  let imgNum = 0;
  let imgAlt = 0;
  const [img, setImg] = useState({
    src: "../assest/img/newarrival.jpg",
    alt: "",
  });
  const images = [
    "../assest/img/newarrival.jpg",
    "../assest/img/wedding6.jpg",
    "../assest/img/purple.png",
    "../assest/img/prompurple.jpg",
    "../assest/img/bluedress.jpg",
  ];
  const alt = [
    "",
    "Wedding Dress",
    "Purple Long Prom Dress",
    "Dark Pruple Prom Dress",
    "Blue Short Party Dress",
  ];

  useEffect(() => {
    setInterval(next, 2000);
  }, [imgNum]);

  const next = () => {
    imgNum++;
    imgAlt++;
    if (imgNum > images.length - 1 && imgAlt > alt.length - 1) {
      imgNum = 0;
      imgAlt = 0;
    }
    setImg({ src: images[imgNum], alt: alt[imgAlt] });
  };
  return (
    <div className="new-arrival">
      <h2 className="title-sections">New Arrival</h2>
      <div className="img-slider">
        <img src={img.src} alt={img.alt} />
        <h3>{img.alt}</h3>
      </div>
    </div>
  );
}

export default Slider;

import React from "react";
import Caupons from "./Caupons/Caupons";
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";

function Home() {
  return (
    <div>
      <Hero />
      <Caupons />
      <Slider />
    </div>
  );
}

export default Home;

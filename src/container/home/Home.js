import React, { Component } from "react";
import Slider from "../../components/home/Slider/Slider.js";
import About from "../../components/home/About/About.js";
import Testimony from "../../components/home/Testimony/Testimony.js";
// import AnimatedSlider from "../../components/home/animated-slider/AnimatedSlider";

class Home extends Component {
  render() {
    return (
      <main>
        <Slider></Slider>
        <About></About>
        <Testimony></Testimony>
      </main>
    );
  }
}
export default Home;

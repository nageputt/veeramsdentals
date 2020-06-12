import React, { Component } from "react";
import Slider from "../../components/home/Slider";
import About from "../../components/home/About";
// import AnimatedSlider from "../../components/home/animated-slider/AnimatedSlider";
class Home extends Component {
  render() {
    return (
      <div>
        <Slider></Slider>
        <About></About>
      </div>
    );
  }
}
export default Home;

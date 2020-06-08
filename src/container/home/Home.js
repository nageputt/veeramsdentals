import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

class Home extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              width="100%"
              src="https://image3.jdomni.in/library/06032020/D5/E7/15/814322DC22BD86B0623C021247_1583498931048.webp"
            />
          </div>
          <div>
            <img
              width="100%"
              src="https://image2.jdomni.in/library/06032020/D7/60/BB/C2FE3D840FD20F8CFE8B8E2819_1583498932847.webp"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Home;

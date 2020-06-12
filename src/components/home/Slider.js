import React, { Component } from "react";
import AnimatedSlider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Slider.css";
import home_1 from "../../assets/veera_home_1.jpg";
import home_2 from "../../assets/veera_home_2.jpg";

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ",
    button: "Learn More",
    image: home_1,
  },
  {
    title: "volutpat Aenean metus",
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat ligula.",
    button: "Learn More",
    image: home_2,
  },
  {
    title: "Vulputate Mollis Ultricies Fermentum",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ",
    button: "Learn More",
    image: home_1,
  },
];

class Slider extends Component {
  render() {
    return (
      <AnimatedSlider autoplay={2500}>
        {content.map((item, index) => (
          <div
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              height: `60vmin`,
            }}
          >
            <div class="slider-content">
              <div class="slider-inner">
                <div class="slider-header">
                  {/* <h1>{item.title}</h1> */}
                  {item.title}
                </div>
                <div class="slider-para">
                  {/* <p>{item.description}</p> */}
                  {item.description}
                </div>
                <div class="slider-button">
                  {/* <button>{item.button}</button> */}
                  {item.button}
                </div>
              </div>
            </div>
          </div>
        ))}
      </AnimatedSlider>
    );
  }
}

export default Slider;

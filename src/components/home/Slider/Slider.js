import React, { Component } from "react";
import AnimatedSlider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./css/Slider.css";
import "./css/media-query/Slider-mq-1400.css";
import "./css/media-query/Slider-mq-800.css";
import "./css/media-query/Slider-mq-600.css";
import home_1 from "../../../assets/veera_home_1.jpg";
import home_2 from "../../../assets/veera_home_2.jpg";
import axios from "axios";



class Slider extends Component {
  state = {
    content: []
  }
  
  componentDidMount(){
    axios.get("https://react-burger-b72df.firebaseio.com/slider.json",{
    }).then(response =>{
      this.setState({content:response.data});
    }).catch(error => {

    });
  }
  render() {
    return (
      <div className="home-slider">
        <AnimatedSlider autoplay={2500}>
          {this.state.content.map((item, index) => (
            <div
              class="slider-main"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                height: `25rem`,
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
      </div>
    );
  }
}

export default Slider;

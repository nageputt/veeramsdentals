import React, { Component } from "react";
import "./About.css";
import about_us from "../../assets/about_us.jpg";
class About extends Component {
  render() {
    return (
      <div>
        <div class="about-header">
          <h1>About Us</h1>
        </div>
        <div class="about-row">
          <div class="about-text-col">
            <p>
              We, Veeram's Dental Clinic, situated at Amaravathi Road, Guntur,
              ANDHRA PRADESH are designed to be different as dentists. A modern
              practice, we believe our patients are entitled to the best dental
              care available. Our skilled team of dental professionals are
              committed to providing you with an exceptional experience from
              start to finish. To this end, we offer a comprehensive array of
              state-of-the-art procedures, from routine care to full mouth
              reconstruction.
            </p>
          </div>
          <div class="about-image-col">
            <img class="img-style" src={about_us}></img>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

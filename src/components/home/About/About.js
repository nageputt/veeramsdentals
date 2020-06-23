import React, { Component } from "react";
import "./css/About.css";
import "./css/media-query/About-mq-1650~1240.css";
import "./css/media-query/About-mq-900.css";
import "./css/media-query/About-mq-650.css";
import about_us from "../../../assets/about_us.jpg";

class About extends Component {
  render() {
    return (
      <section class="about-section">
        <header class="about-header">
          <h1>About Us</h1>
        </header>
        <section class="about-detail">
          <article class="about-article">
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
          </article>
          <aside class="about-img">
            <img class="img-style" src={about_us} alt={about_us}></img>
          </aside>
        </section>
      </section>
    );
  }
}
export default About;

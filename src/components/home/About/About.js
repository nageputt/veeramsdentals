import React, { Component } from "react";
import "./css/About.css";
import "./css/media-query/About-mq-1650~1240.css";
import "./css/media-query/About-mq-900.css";
import "./css/media-query/About-mq-650.css";
import about_us from "../../../assets/about_us.jpg";
import axios from "axios";

class About extends Component {
  state = {
    aboutUs:''
  }
  componentDidMount(){
    axios.get("https://react-burger-b72df.firebaseio.com/aboutus.json",{
    }).then(response =>{
      this.setState({aboutUs:response.data});
    }).catch(error => {
      alert();
    });
  }
  render() {
    return (
      <section class="about-section">
        <h1 class="about-header">
          <h1>About Us</h1>
        </h1>
        <section class="about-detail">
          <article class="about-article">
            <p>{this.state.aboutUs}</p>
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

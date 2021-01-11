import React, { Component } from "react";
import "./css/Footer.css";
import "./css/media-query/Footer-mq-1270.css";
import "./css/media-query/Footer-mq-800.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import axios from 'axios';

class Footer extends Component {

  state = {
    copyrights:''
  
  }
  componentDidMount(){
    axios.get("https://react-burger-b72df.firebaseio.com/contactus.json",{
    }).then(response =>{
      this.setState({links:response.data});
      this.setState({copyrights:response.data.copyrights});
    }).catch(error => {
      alert();
    });
  }

  openInNewTab(button) {
    let url = this.state.links.button;
    window.open(url, "_blank");
  }
  render() {
    return (
      <footer class="footer">
        {/* <section class="menu-section">
          <ul>
            <li>Home</li>
            <li>Specialities</li>
            <li>Contact Us</li>
            <li>Book Appointment</li>
          </ul>
        </section> */}
        <section class="icon-section">
          <TwitterIcon onClick={()=> window.open(this.state.links.twitter, "_blank")} ></TwitterIcon>
          <FacebookIcon  onClick={()=> window.open(this.state.links.fb, "_blank")} ></FacebookIcon>
          <InstagramIcon  onClick={()=>window.open(this.state.links.instagram, "_blank")} ></InstagramIcon>
          <YouTubeIcon  onClick={()=> window.open(this.state.links.youtude, "_blank")} ></YouTubeIcon>
          <LinkedInIcon  onClick={()=> window.open(this.state.links.linkedin, "_blank")} ></LinkedInIcon>
        </section>

        <section class="social-section">
          {/* <section class="social-icon-section">
              <TwitterIcon></TwitterIcon>
              <FacebookIcon></FacebookIcon>
              <InstagramIcon></InstagramIcon>
              <YouTubeIcon></YouTubeIcon>
              <LinkedInIcon></LinkedInIcon>
            </section> */}
          <div class="copyright-section">
            {this.state.copyrights}
          </div>
        </section>
      </footer>
    );
  }
}
export default Footer;

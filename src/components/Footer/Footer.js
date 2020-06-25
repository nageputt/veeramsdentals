import React, { Component } from "react";
import "./css/Footer.css";
import "./css/media-query/Footer-mq-1270.css";
import "./css/media-query/Footer-mq-800.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <section class="menu-section">
          <ul>
            <li>Home</li>
            <li>Specialities</li>
            <li>Contact Us</li>
            <li>Book Appointment</li>
          </ul>
        </section>
        <section class="icon-section">
          <TwitterIcon></TwitterIcon>
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <YouTubeIcon></YouTubeIcon>
          <LinkedInIcon></LinkedInIcon>
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
            © Copyrights 2020 - 2021.Veeram's Dental Clinic.All Rights Reserved.
          </div>
        </section>
      </footer>
    );
  }
}
export default Footer;

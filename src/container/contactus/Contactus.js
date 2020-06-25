import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { LocationOn, Email, Call, AccessTimeRounded } from "@material-ui/icons";
import ResponseForm from "../../components/contactus/ResponseForm";
import MapContainer from "../../components/map/MapContainer";
import "./Contactus.css";

class Contactus extends React.Component {
  render() {
    return (
      <div className="header-div">
        <div className="image-div">
          <img
            width="100%"
            className="contactbanner"
            src="get-in-touch-banner.jpg"
            alt="get-in-touch-banner.jpg"
          />
        </div>
        <Container component="main" maxWidth="s">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={7}>
              <div className="location-div">
                <div className="address-div">
                  <header class="address-header">
                    <LocationOn color="blue" />
                    <h3>Our Hospital Address</h3>
                  </header>
                  <section class="address-section">
                    <p>
                      2B, Beside Anjaneya Swamy Temple, Upstairs Of Andhra Bank
                      ATM, Amaravathi Road, Guntur, ANDHRA PRADESH 522007
                    </p>
                  </section>
                </div>
                <div className="email-div">
                  <header class="email-header">
                    <Email color="blue" />
                    <h3>General Enquiries</h3>
                  </header>
                  <section class="email-section">
                    <p>veeramsdental@gmail.com</p>
                  </section>
                </div>
                <div className="call-div">
                  <header class="call-header">
                    <Call Style={{ fontSize: "200%" }} />
                    <h3>Call Us</h3>
                  </header>
                  <section class="email-section">
                    <a class="phoneNo-link" href="tel:+918464932409">
                      +91-8464932409
                    </a>
                    <br />
                    <a class="phoneNo-link" href="tel:+918985342409">
                      +91-8985342409
                    </a>
                  </section>
                </div>
                <div className="timing-div">
                  <header class="timing-header">
                    <AccessTimeRounded />
                    <h3>Our Timing</h3>
                  </header>
                  <section class="timing-section">
                    <p>Mon - Sun : 12:00 AM - 12:00 PM</p>
                  </section>
                </div>
              </div>
              <MapContainer />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ResponseForm />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Contactus;

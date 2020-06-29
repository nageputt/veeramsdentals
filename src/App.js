import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/navbar/Navbar";
import Home from "./container/home/Home";
import Specialites from "./container/specialites/Specialites";
import Contactus from "./container/contactus/Contactus";
import Team from "./container/team/Team";
import Appointment from "./container/appointment/Appointment";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header class="header-class">
          <Helmet>
            <title>{"Veeram's Dentals"}</title>
          </Helmet>
          <Router>
            <Navbar />
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact path="/specialites" component={Specialites} />
              <Route exaxt path="/ourteam" component={Team} />
              <Route exact path="/contactus" component={Contactus} />
              <Route exact path="/bookApointment" component={Appointment} />
            </Switch>
          </Router>
        </header>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;

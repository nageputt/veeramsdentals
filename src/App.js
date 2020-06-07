import React from 'react';
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Navbar from './components/navigation/navbar/Navbar';
import Home from './container/home/Home';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Helmet>
          <title>{ 'Veeram\'s Dentals' }</title>
      </Helmet>
      <Navbar />
    <div className="container">
      
    </div>
    <Router>
      <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact path="/specialites" component={Home} />
      <Route exaxt path="/ourteam" component={Home} />
      <Route exact path="/contactus" component={Home} />
      <Route exact path="/bookApointment" component={Home} />
      </Switch>
  </Router>

    </div>
  )
}
}

export default App;

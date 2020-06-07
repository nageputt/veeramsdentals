import React from 'react';
import {Helmet} from 'react-helmet';
import Header from './container/header/Header';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Helmet>
          <title>{ 'Veeram\'s Dentals' }</title>
      </Helmet>
      <Header/>

    </div>
  )
}
}

export default App;

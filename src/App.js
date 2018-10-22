import React, { Component } from 'react';
import {Header, Home} from './components'
import Routes from './routes/routes'


class App extends Component {
  render() {
    return  (
  <div>
    <Header />

   <Routes />
    
  </div>
    )
  }
}

export default App;

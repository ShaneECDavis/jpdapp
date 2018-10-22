import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home, ExcelSheet} from '../components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ExcelSheet" component={ExcelSheet} />
      </Switch>
    )
  }
}


export default Routes 
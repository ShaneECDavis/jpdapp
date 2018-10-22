import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, ExcelSheet, RightTriangle, BeerFinder } from '../components'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/ExcelSheet" component={ExcelSheet} />
        <Route exact path="/RightTriangle" component={RightTriangle} />
        <Route exact path="/BeerFinder" component={BeerFinder} />
      </div>
    )
  }
}

export default Routes

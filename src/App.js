import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ListView from './components/ListView'
import * as api from './utils/api'


export default class App extends Component {
  render(){
    return (
      <div className="App">
          <Switch>
             <Route exact path="/" component={ListView} />
             <Route exact path="/:category" component={ListView} />
          </Switch>
      </div>
    )
  }
}



//export default connect(mapStatetoProps)(App)

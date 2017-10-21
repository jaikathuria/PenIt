import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ListView from './components/ListView'
import PostView from './components/PostView'
import EditView from './components/EditView'


export default class App extends Component {
  render(){
    return (
      <div className="App">
          <Switch>
             <Route exact path="/" component={ListView} />
             <Route exact path="/:category" component={ListView} />
          </Switch>
          <Switch>
              <Route exact path="/:category/:id" component={PostView} />
          </Switch>
      </div>
    )
  }
}

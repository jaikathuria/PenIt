import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import Post from './components/Post'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/home"
          render = {() => (
            <div className="App">
              <Home/>
            </div>
          )}
        />
      <Route
          exact
          path="/category"
          render = {() => (
            <Posts/>
          )}
        />
      <Route
        exact
        path="/"
        render = {() => (
            <Post/>
        )}
        />
     </div>

    );
  }
}

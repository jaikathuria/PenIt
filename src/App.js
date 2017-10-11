import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import Post from './components/Post'
import { reducer } from './reducer/index'
import { addPen } from './actions/pen'
import * as api from './utils/api'


export default class App extends Component {
  state = {
      category: [
          "Category1",
          "Category2",
          "Category3",
          "Category4",
          "Category5",
          "Category6",
      ],
      pens: [
          {
            title: "My First Pen",
            content: "Some random garbage will go here",
            author: "Jai Kathuria",
            time: Date.now(),
            id: 1,
            score: 0,
          },
      ]
  }

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
            <Posts
               pens = { this.state.pens }
            />
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

/* -- Test Cases


const initialState = {
      pens: [
          {
            title: "My First Pen",
            content: "Some random garbage will go here",
            author: "Jai Kathuria",
            time: Date.now(),
          }
      ]
}

const toAdd = {
    title: "New Post Test",
    content: "Again some crap",
    author: "papa tumhare",
    time: Date.now(),
}
console.log(initialState)
console.log(reducer(initialState, addPen(toAdd)))


  -- */

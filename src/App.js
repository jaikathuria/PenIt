import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import Post from './components/Post'
import Modal from './components/Modal'
import TopNav from './components/TopNav'
import Categories from './components/Categories'
import { reducer } from './reducer/index'
import { connect } from 'react-redux'
import * as api from './utils/api'

let renders = 0
class App extends Component {
  render(){
    renders++
    console.log("Props of App Component:", this.props)
    console.log("Render Number:",renders)
    return (
      <div>
          <TopNav title={`Pen-it`}/>
          <Categories/>
      </div>
    )
  }
}

const mapStatetoProps = ( state ) => {
    return {
        pens: state.pen.pens
    }
}


export default connect(mapStatetoProps)(App)

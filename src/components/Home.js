import React, { Component } from 'react'
import TopNav from './TopNav'
import Categories from './Categories'
import Posts from './Posts'

export default class Home extends Component {
    state = {
        pens: []
    }
    render () {
        return (
          <div>
            <TopNav
              title="Pen-it"
            />
            <Categories/>
            <Posts
               pens = { this.state.pens }
            />
          </div>
        )
    }
}

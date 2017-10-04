import React, { Component } from 'react'
import TopNav from './TopNav'
import Categories from './Categories'

export default class Home extends Component {
    render () {
        return (
          <div>
            <TopNav/>
            <Categories/>
          </div>
        )
    }
}

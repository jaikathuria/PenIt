import React, { Component } from 'react'

export default class Categories extends Component {
    render () {
        return (
          <div className="container nav-margin">
            <ul className="nav nav-pills nav-justified">
              <li><a>Home</a></li>
              <li><a>Profile</a></li>
              <li><a>Messages</a></li>
            </ul>
          </div>
        )
    }
}

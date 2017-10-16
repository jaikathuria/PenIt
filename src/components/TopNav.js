import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TopNav extends Component {
    render () {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container" id="top">
              <div className="row">
                <div className="col-xs-12">
                  <div className="navbar-header text-center">
                    <Link className="navbar-brand brand" to="/">{this.props.title}</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

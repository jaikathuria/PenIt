import React, { Component } from 'react'

export default class TopNav extends Component {
    render () {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container" id="top">
              <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                  <div className="navbar-header text-center">
                    <a className="navbar-brand brand" href="">Pen-it</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

import React, { Component } from 'react'

export default class BottomSort extends Component {
    render () {
        return (
          <nav className="navbar navbar-default navbar-fixed-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="text-center">
                    <button type="button" className="btn btn-default navbar-btn">
                      Votes <span className="glyphicon glyphicon-chevron-up"></span>
                    </button>
                    <button type="button" className="btn btn-default navbar-btn">
                      Date <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

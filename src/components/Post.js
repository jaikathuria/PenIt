import React, { Component } from 'react'
import TopNav from './TopNav'

export default class Post extends Component {
    render () {
        return (
          <div>
            <TopNav
              title="Pen-it"
            />
            <div className="container nav-margin">
                <div className="row">
                    <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                      <div className="panel panel-default">
                          <div className="panel-heading text-right">
                            <h3 className="panel-title big-bold pull-left">Panel title</h3>
                            <div className="btn-group btn-group-sm">
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-pencil"></span>
                              </button>
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-trash"></span>
                              </button>
                            </div>
                          </div>
                          <div className="panel-body">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </div>
                       </div>
                    </div>
                </div>
                <div className="row text-center">
                  <div className="btn-group bottom-20">
                    <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-up"></span></button>
                    <button className="btn btn-default"><span className="badge score">-542</span></button>
                    <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-down"></span></button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-sm-offset-2 bottom-20">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="What do you think ... ?"/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Submit</button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <ul className="list-group">
                      <li className="list-group-item well well-sm">Cras justo odio</li>
                      <li className="list-group-item well well-sm">Dapibus ac facilisis in</li>
                      <li className="list-group-item well well-sm">Morbi leo risus</li>
                      <li className="list-group-item well well-sm">Porta ac consectetur ac</li>
                      <li className="list-group-item well well-sm">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import TopNav from './TopNav'

export default class Posts extends Component {
    render () {
        return (
          <div>
            <TopNav/>
            <div className="container nav-margin">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                      
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                      <ul className="list-group">
                        <li className="list-group-item">
                            <div className="btn-group pull-right tool-box">
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-pencil"></span>
                              </button>
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-trash"></span>
                              </button>
                            </div>
                            <div className="btn-group pull-right">
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-up"></span></button>
                              <button className="btn btn-default"><span className="badge score">-542</span></button>
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-down"></span></button>
                            </div>
                            <div className="list-group-item-heading">
                              <a><h3 className="post-title">List group item heading</h3></a>
                            </div>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li className="list-group-item">
                            <div className="btn-group pull-right tool-box">
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-pencil"></span>
                              </button>
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-trash"></span>
                              </button>
                            </div>
                            <div className="btn-group pull-right">
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-up"></span></button>
                              <button className="btn btn-default"><span className="badge score">-542</span></button>
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-down"></span></button>
                            </div>
                            <div className="list-group-item-heading">
                              <a><h3 className="post-title">List group item heading</h3></a>
                            </div>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li className="list-group-item">
                            <div className="btn-group pull-right tool-box">
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-pencil"></span>
                              </button>
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-trash"></span>
                              </button>
                            </div>
                            <div className="btn-group pull-right">
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-up"></span></button>
                              <button className="btn btn-default"><span className="badge score">-542</span></button>
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-down"></span></button>
                            </div>
                            <div className="list-group-item-heading">
                              <a><h3 className="post-title">List group item heading</h3></a>
                            </div>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li className="list-group-item">
                            <div className="btn-group pull-right tool-box">
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-pencil"></span>
                              </button>
                              <button type="button" className="btn btn-default">
                                  <span className="glyphicon glyphicon-trash"></span>
                              </button>
                            </div>
                            <div className="btn-group pull-right">
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-up"></span></button>
                              <button className="btn btn-default"><span className="badge score">-542</span></button>
                              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-down"></span></button>
                            </div>
                            <div className="list-group-item-heading">
                              <a><h3 className="post-title">List group item heading</h3></a>
                            </div>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>

                      </ul>
                    </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <nav className="text-center">
                      <ul className="pagination">
                        <li>
                          <a href="" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="active"> <a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li>
                          <a href="" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
            </div>
          </div>
        )
    }
}

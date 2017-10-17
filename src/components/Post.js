import React, { Component } from 'react'
import { deletePost } from '../utils/api'

export default class Post extends Component {

    deleteHandler( penid ) {

    }

    render () {
        const pen = this.props.pen
        return (
          <div>
            <div className="container nav-margin">
                <div className="row">
                    <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                            <div className="panel-title big-bold pull-left">{ pen.title || "Title of a great Pen!" }</div>
                            <div className="text-center">
                              <div className="btn-group btn-group-sm top-xs-10">
                                <button type="button" className="btn btn-default">
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </button>
                                <button type="button" className="btn btn-default">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="panel-body">
                              { pen.content || "We are fetching some great content for you!" }
                          </div>
                       </div>
                    </div>
                </div>
                <div className="row text-center">
                  <div className="btn-group bottom-20">
                    <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-up"></span></button>
                    <button className="btn btn-default"><span className="badge score">{ pen.vote || 0 }</span></button>
                    <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-down"></span></button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

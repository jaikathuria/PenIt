import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


/* Import API methods */
import { deletePost, votePost  } from '../utils/api'
/* Import Action */
import { deletePen, votePen } from '../actions/pen'
import { editPenModal } from '../actions/modal'

class Post extends Component {

    deleteHandler = ( penid ) => {
        deletePost( penid ).then(pen => this.props.dispatch(deletePen( pen )))
        this.props.history.push('/')
    }

    vote = ( id, score ) => {
        votePost( id, score ).then(pen => this.props.dispatch(votePen( pen )))
    }

    render () {
        const pen = this.props.pen
        return (
          <div>
            <div className="container nav-margin">
                <div className="row">
                    <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                      <div className="panel panel-default">
                          <div className="panel-heading text-center">
                            <div className="text-center block">
                                <div className="panel-title big-bold pull-left">{ pen.title || "Title of a great Pen!" }</div>
                            </div>
                            <div className="text-center block">
                                <div className="panel-title" > - { pen.author } </div>
                            </div>
                            <div className="btn btn-default pull-right"> <span className="glyphicon glyphicon-comment"></span> | { pen.commentCount } </div>
                          </div>
                          <div className="panel-body">
                              { pen.content || "We are fetching some great content for you!" }
                          </div>
                       </div>
                    </div>
                </div>
                <div className="row text-center">
                  <div className="btn-group bottom-20">
                    <button type="button" className="btn btn-default"  onClick={ () => { this.props.dispatch(editPenModal(pen.id)) }}>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button type="button" className="btn btn-default" onClick={ ()=> {this.vote(pen.id,1)} }><span className="glyphicon glyphicon-chevron-up"></span></button>
                    <button className="btn btn-default"><span className="badge score">{ pen.vote || 0 }</span></button>
                    <button type="button" className="btn btn-default" onClick={ ()=> {this.vote(pen.id,-1)} }><span className="glyphicon glyphicon-chevron-down"></span></button>
                    <button type="button" className="btn btn-default" onClick={ () => { this.deleteHandler( pen.id ) } }>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
                </div>
              </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>({
})

export default withRouter(connect(mapStatetoProps)(Post))

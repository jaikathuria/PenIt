import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
/* Import API methods */
import { fetchComments, deleteAPIComment, voteAPIComment } from '../utils/api'
/* Import Action */
import { getComments, deleteComment, voteComment } from '../actions/comments'


class Comments extends Component {
    componentDidMount() {
        const postid = this.props.postid
        this.dispatchComments( postid )
    }

    componentWillReceiveProps( newProps ) {
        if(newProps.postid !== this.props.postid){
          const postid = newProps.postid
          this.dispatchComments( postid )
        }
    }

    dispatchComments( id ) {
        fetchComments( id ).then(comments => this.props.dispatch(getComments( comments )))
    }

    deleteHandler = ( id ) => {
        deleteAPIComment( id ).then(comment => this.props.dispatch(deleteComment( comment )))
    }

    vote = (id, score) => {
        voteAPIComment( id, score ).then( comment => this.props.dispatch( voteComment( comment )))
    }

    render () {
        const comments = this.props.comments.filter(comment => !comment.deleted)
        return (
          <div className="container bottom-70">
            <div className="row">
              <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                <div className="list-group">
                  { comments.map(comment => (
                    <div className="list-group-item" key={comment.id}>
                      <div>
                        <div className="list-group-item-text">
                          { comment.content || "Some great comment is comming here "}
                        </div>
                        <div className="list-group-item-text author big-bold">
                          - { comment.author || "Definitely someone big said this"}
                        </div>
                      </div>
                      <div className="comment-box">
                        <div className="btn-group btn-group-sm pull-right tool-box">
                          <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-pencil"></span>
                          </button>
                          <button type="button" className="btn btn-default" onClick={()=>{ this.deleteHandler( comment.id )}}>
                            <span className="glyphicon glyphicon-trash"></span>
                          </button>
                        </div>
                        <div className="btn-group btn-group-sm pull-right">
                          <button type="button" className="btn btn-default" onClick={()=>{this.vote(comment.id, 1)}}><span className="glyphicon glyphicon-chevron-up"></span></button>
                          <button className="btn btn-default"><span className="badge score-sm">{ comment.vote || 0 }</span></button>
                          <button type="button" className="btn btn-default" onClick={()=>{this.vote(comment.id, -1)}}><span className="glyphicon glyphicon-chevron-down"></span></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    comments: state.comment.comments
})

export default connect(mapStatetoProps)(Comments)

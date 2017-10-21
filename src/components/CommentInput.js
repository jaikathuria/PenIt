import React, { Component } from 'react'
import { connect } from 'react-redux'
/* Import API methods */
import { addAPIComment, editAPIComment } from '../utils/api'
/* Import Action */
import { addComment, editComment } from '../actions/comments'
import { closeCommentModal } from '../actions/modal'

class CommentInput extends Component {
    comment = {}

    componentDidMount() {
        this.selectEditComment( this.props.modal.id )
    }
    componentWillReceiveProps ( newProps ) {
        if ( newProps.modal.id && newProps.modal.id !== this.props.modal.id ){
            this.selectEditComment ( newProps.modal.id )
        }
    }

    state = {
        author: this.props.comment.author || "",
        content: this.props.comment.content || "",
    }

    selectEditComment = ( id ) => {
        if( id ){
            this.comment = this.props.comments.filter(comment => comment.id === id)[0]
            this.setState({
                author: this.comment.author,
                content: this.comment.content,
            })
        }
    }

    regex = /^[0-9a-zA-Z,.()+\s-]*$/


    handleChange = ( event ) => {
        const input = event.target
        input.setCustomValidity("")
        if (this.regex.test(input.value))
        this.setState({
            [input.name]: input.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if( this.state.author.length !== 0 ) {
            this.refs.author.setCustomValidity("")
        }
        else{
            this.refs.author.setCustomValidity("Author name can't be empty")
            this.setState({
                author: ""
            })
            return false
        }
        if ( this.state.content.length !== 0 ) {
            this.refs.content.setCustomValidity("")
        }
        else {
            this.refs.content.setCustomValidity("Content can't be empty")
            this.setState({
                content: ""
            })
            return false
        }
        const comment = {
            author: this.state.author,
            body: this.state.content,
        }

        this.props.modal.id ?
          editAPIComment( this.props.modal.id , comment).then( comment => this.props.dispatch(editComment ( comment )))
          :
          addAPIComment(this.props.postid, comment).then(comment => this.props.dispatch(addComment( comment )))

        this.props.dispatch(closeCommentModal())

        this.setState({
            author: "",
            content: "",
        })


    }

    render () {
        return this.props.modal.active && (
          <nav className="navbar navbar-default navbar-fixed-bottom comment-input">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <form onSubmit={ this.handleSubmit }>
                        <input type="text" className="form-control full-input top-10" placeholder="Author" value={ this.state.author } name="author" onChange={this.handleChange} ref="author"/>
                        <input type="text" className="form-control full-input top-10" placeholder="Content" value={ this.state.content} name="content" onChange={this.handleChange} ref="content"/>
                        <button className="btn btn-default top-10" type="submit">Submit</button>
                        <button className="btn btn-default top-10 pull-right" type="button" onClick={()=>{ this.props.dispatch(closeCommentModal()) }}> Close </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}
const mapStatetoProps = ( state ) => ({
    modal: state.modal.commentModal,
    comments: state.comment.comments
})
export default connect(mapStatetoProps)(CommentInput)

import React, { Component } from 'react'
import { connect } from 'react-redux'
/* Import API methods */
import { addAPIComment } from '../utils/api'
/* Import Action */
import { addComment } from '../actions/comments'

class CommentInput extends Component {
    state = {
        author: this.props.comment.author || "",
        content: this.props.comment.content || "",
    }

    regex = /^[0-9a-zA-Z,.()+\/\s-]*$/

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
            content: this.state.content,
        }
        addAPIComment(this.props.postid, comment).then(comment => this.props.dispatch(addComment( comment )))
        this.setState({
            author: "",
            content: "",
        })

    }

    render () {
        return (
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
                        <button className="btn btn-default top-10 pull-right" type="button"> Close </button>
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
})
export default connect(mapStatetoProps)(CommentInput)

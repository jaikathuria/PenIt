import React, { Component } from 'react'

export default class CommentInput extends Component {
    state = {
        author: this.props.comment.author || "",
        content: this.props.comment.content || "",
    }


    handleChange = ( event ) => {
        const input = event.target
        if (/^[a-zA-Z0-9\s]^$/i.test(input.value))
        this.setState({
            [input.name]: input.value
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
                        <input type="text" className="form-control full-input top-10" placeholder="Author" value={ this.state.author } name="author" onChange={this.handleChange}/>
                        <input type="text" className="form-control full-input top-10" placeholder="Content" value={ this.state.content} name="content" onChange={this.handleChange}/>
                        <button className="btn btn-default top-10">Submit</button>
                        <button className="btn btn-default top-10 pull-right"> Close </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

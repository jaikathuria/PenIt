import React, { Component } from 'react'

export default class InputFields extends Component {

    state = {
        author: this.props.pen.author || "",
        title: this.props.pen.title || "",
        content: this.props.pen.content || "",
        category: this.props.pen.category || "",
    }

    componentWillReceiveProps ( newProps ) {
        if(newProps.pen.id !== this.props.pen.id) {
            this.setState({
              author: newProps.pen.author || "",
              title: newProps.pen.title || "",
              content: newProps.pen.content || "",
              category: newProps.pen.category || "",
            })
        }
    }

    regex = /^[0-9a-zA-Z,.!()+\/\s-]*$/

    handleChange = (event) => {
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
        if( this.state.title.length !== 0 ) {
            this.refs.title.setCustomValidity("")
        }
        else{
            this.refs.title.setCustomValidity("Title name can't be empty")
            this.setState({
                title: ""
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
        if ( this.state.category.length !== 0 ) {
            this.refs.category.setCustomValidity("")
        }
        else {
            this.refs.category.setCustomValidity("You must select some category")
            this.setState({
                category: ""
            })
            return false
        }
        const pen = {
            author: this.state.author,
            body: this.state.content,
            title: this.state.title,
            category: this.state.category,
        }
        this.props.addPen( pen )
    }

    render() {
        return (
            <div className="container nav-margin">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                  <div className="panel panel-default">
                      <div className="panel-body">
                        <form onSubmit={ this.handleSubmit }>
                            <input type="text" className="form-control full-input top-10" placeholder="Author" onChange={this.handleChange} value={this.state.author} name="author" ref="author"/>
                            <input type="text" className="form-control full-input top-10" placeholder="Title" onChange={this.handleChange} value={this.state.title} name="title" ref="title"/>
                            <input type="text" className="form-control full-input top-10" placeholder="Content" onChange={this.handleChange} value={this.state.content} name="content" ref="content"/>
                            <select className="form-control full-input top-10" value={this.state.category} name="category" onChange={this.handleChange} ref="category">
                                  <option value="" > Select Category </option>
                            {
                              this.props.categories.map((category,index) => (
                                  <option key={index} value={category.path}> {category.name} </option>
                              ))
                            }
                            </select>
                            <button type="submit" className="btn btn-default top-10">Submit</button>
                         </form>
                      </div>
                  </div>
                </div>
            </div>
        )
    }
}

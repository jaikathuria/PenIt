import React, { Component } from 'react'
import { connect } from 'react-redux'
/* React Components */
import TopNav from './TopNav'
import InputFields from './InputFields'
/* Import API methods */
import { getPost, editPost } from '../utils/api'
/* Import Action */
import { fetchPen, editPen } from '../actions/pen'

class EditView extends Component {
    componentDidMount() {
        const postid = this.props.match.params.id || false
        postid && this.getPen(postid)
    }

    componentWillReceiveProps( newProps ) {
        if(newProps.match.params.category !== this.props.match.params.category){
            const postid = newProps.match.params.id || false
            postid && this.getPen(postid)
        }
    }

    getPen( id ) {
      getPost(id).then(pen => this.props.dispatch(fetchPen(pen)))
    }

    handleSubmit = ( pen ) => {
        editPost( this.props.pen.id, pen ).then( pen => this.props.dispatch(editPen( pen ))).then(() => {
            this.props.history.push(`/${this.props.pen.category}/${this.props.pen.id}`)
        })
    }
    render() {
        return (
            <div>
                <TopNav title="Edit-Pen"/>
                <InputFields
                  categories={this.props.categories}
                  pen={this.props.pen}
                  addPen={this.handleSubmit}
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    categories: state.category.categories,
    pen: state.pen.currentPen
})

export default connect(mapStatetoProps)(EditView)

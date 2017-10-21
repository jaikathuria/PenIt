import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
/* React Components */
import TopNav from './TopNav'
import InputFields from './InputFields'
/* Import API methods */
import { addPost, getPost, editPost } from '../utils/api'
/* Import Action */
import { addPen, fetchPen, editPen } from '../actions/pen'
import { closePenModal } from '../actions/modal'

class Modal extends Component{

    componentDidMount() {
        const postid = this.props.modal.id || false
        postid && this.getPen(postid)
    }

    componentWillReceiveProps( newProps ) {
        if(newProps.modal.id && newProps.modal.id !== this.props.modal.id){
            const postid = newProps.modal.id || false
            postid && this.getPen(postid)
        }
    }

    getPen( id ) {
      getPost(id).then(pen => this.props.dispatch(fetchPen(pen)))
    }

    handlePenSubmit = ( pen ) => {
        this.props.modal.id ?
        editPost( this.props.pen.id, pen ).then( pen => this.props.dispatch(editPen( pen ))).then(() => {
            this.props.dispatch(closePenModal())
            this.props.history.push(`/${this.props.pen.category}/${this.props.pen.id}`)
        })
        :
        addPost( pen ).then( pen => this.props.dispatch(addPen(pen))).then(()=>{
            this.props.dispatch(closePenModal())
            this.props.history.push(`/${this.props.pen.category}/${this.props.pen.id}`)
        })


    }

    render() {
        return this.props.modal.active && (
          <div className="modal">
                  { this.props.modal.id ? (  <TopNav title="Edit-Pen" />) : ( <TopNav title="New-Pen" />) }
            <div className="close-modal"> <span className="glyphicon glyphicon-remove" onClick={()=>{this.props.dispatch(closePenModal())}}></span> </div>
             <InputFields
                categories={this.props.categories}
                pen={this.props.pen}
                addPen={this.handlePenSubmit}
             />
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    categories: state.category.categories,
    pen: state.pen.currentPen,
    modal: state.modal.penModal
})
export default withRouter(connect(mapStatetoProps)(Modal))

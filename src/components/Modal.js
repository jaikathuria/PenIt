import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
/* React Components */
import TopNav from './TopNav'
import InputFields from './InputFields'
/* Import API methods */
import { addPost } from '../utils/api'
/* Import Action */
import { addPen } from '../actions/pen'

class Modal extends Component{
    state = {
      modal: false
    }
    handlePenSubmit = ( pen ) => {
        addPost( pen ).then( pen => this.props.dispatch(addPen(pen))).then(()=>{
            this.props.history.push(`/${this.props.pen.category}/${this.props.pen.id}`)
        })
    }
    render() {
        return this.state.modal && (
          <div className="modal">
              <TopNav
                  title="New-Pen"
              />
             <div className="close-modal"> <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> </div>
             <InputFields
                categories={this.props.categories}
                pen={{}}
                addPen={this.handlePenSubmit}
             />
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    categories: state.category.categories,
    pen: state.pen.currentPen
})
export default withRouter(connect(mapStatetoProps)(Modal))

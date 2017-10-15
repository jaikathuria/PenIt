import React, { Component } from 'react'
import TopNav from './TopNav'
import InputFields from './InputFields'

export default class Modal extends Component{
    state = {
      modal: false
    }
    render() {
        return this.state.modal && (
          <div className="modal">
              <TopNav
                  title="New-Pen"
              />
             <div className="close-modal"> <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> </div>
             <InputFields/>
          </div>
        )
    }
}

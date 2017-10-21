import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
/* Import Action */
import { editPenModal, newPenModal } from '../actions/modal'
import { clearPen } from '../actions/pen'

class Posts extends Component {
    openEditModal = ( id ) => {
        this.props.dispatch(editPenModal(id))
    }

    sortPens = ( pens ) => {
        switch(this.props.sort.order) {
            case 'asc':
                return this.props.sort.type === "date" ? pens.sort((a,b) => a.time >= b.time) : pens.sort((a,b) => a.vote >= b.vote)
            case 'desc':
                return this.props.sort.type === "date" ? pens.sort((a,b) => a.time < b.time) : pens.sort((a,b) => a.vote < b.vote)
        }
    }

    render () {
        const pens = this.sortPens(this.props.pens.filter(pen => !pen.deleted))
        return (
            <div className="container bottom-50">
                <div className="row">
                    <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                      <ul className="list-group">
                        { pens.map((pen)=>(
                          <li className="list-group-item" key={ pen.id }>
                              <div className="btn-group pull-right tool-box">
                                <button type="button" className="btn btn-default" onClick={ () => {this.openEditModal(pen.id)}}>
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </button>
                                <button type="button" className="btn btn-default" onClick={()=>{this.props.delete(pen.id)}}>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                              </div>
                              <div className="btn-group pull-right">
                                <button type="button" className="btn btn-default" onClick={ ()=> {this.props.vote(pen.id,1)} }><span className="glyphicon glyphicon-chevron-up"></span></button>
                                <button className="btn btn-default"><span className="badge score">{ pen.vote }</span></button>
                                <button type="button" className="btn btn-default" onClick={ ()=> {this.props.vote(pen.id,-1)} }><span className="glyphicon glyphicon-chevron-down"></span></button>
                              </div>
                              <div className="list-group-item-heading">
                                <Link to={`/${pen.category}/${pen.id}`}><h3 className="post-title">
                                  { pen.title }
                                </h3></Link>
                              </div>
                              <p className="list-group-item-text">
                                 { pen.content }
                              </p>
                              <p className="list-group-item-text author big-bold">
                                - { pen.author }
                              </p>
                          </li>
                        ))}
                        <li className="list-group-item grey-link text-center" onClick={()=>{
                            this.props.dispatch(clearPen())
                            this.props.dispatch(newPenModal())
                          }} >
                            <p className="list-group-item-text">
                               { pens.length ?
                                 "Write your new Pen"
                                  :
                                 "Be the first one to create a Pen here"
                               }
                            </p>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
        )
    }
}

const mapStatetoProps = ( state ) => ({
    sort: state.sortType
})
export default withRouter(connect(mapStatetoProps)(Posts))

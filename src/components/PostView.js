import React, { Component } from 'react'
import { connect } from 'react-redux'
/* React Components */
import Modal from './Modal'
import TopNav from './TopNav'
import Post from './Post'
import Comments from './Comments'
import BottomSort from './BottomSort'
import CommentInput from './CommentInput'
/* Import API methods */
import { getPost } from '../utils/api'
/* Import Action */
import { fetchPen } from '../actions/pen'
import { closeCommentModal } from '../actions/modal'

class PostView extends Component {
    componentDidMount() {
        const postid = this.props.match.params.id || false
        postid && this.getPen(postid)
        this.props.dispatch(closeCommentModal())
    }

    componentWillReceiveProps( newProps ) {
        if(newProps.match.params.id !== this.props.match.params.id){
            const postid = newProps.match.params.id || false
            postid && this.getPen(postid)
        }
    }

    getPen( id ) {
      getPost(id).then(pen => this.props.dispatch(fetchPen(pen)))
    }

    render() {
        return (
          <div>
            <Modal/>
            <TopNav title={`Pen-it`}/>
            <Post pen={this.props.pen}/>
            <Comments postid={this.props.pen.id}/>
            <BottomSort/>
            <CommentInput comment={{}} postid={this.props.pen.id}/>
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    pen: state.pen.currentPen
})

export default connect(mapStatetoProps)(PostView)

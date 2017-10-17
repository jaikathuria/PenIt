import React, { Component } from 'react'
import { connect } from 'react-redux'
/* React Components */
import TopNav from './TopNav'
import Post from './Post'
import Comments from './Comments'
import BottomSort from './BottomSort'
/* Import API methods */
import { getPost } from '../utils/api'
/* Import Action */
import { fetchPen } from '../actions/pen'

class PostView extends Component {
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

    render() {
        return (
          <div>
            <TopNav title={`Pen-it`}/>
            <Post pen={this.props.pen}/>
            <Comments postid={this.props.pen.id}/>
            <BottomSort/>
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    pen: state.pen.currentPen
})

export default connect(mapStatetoProps)(PostView)

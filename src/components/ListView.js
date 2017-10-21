import React, { Component } from 'react'
import { connect } from 'react-redux'
/* React Components */
import Modal from './Modal'
import TopNav from './TopNav'
import Categories from './Categories'
import Posts from './Posts'
import BottomSort from './BottomSort'
/* Import API methods */
import { getAllPosts, getPosts,  deletePost, votePost } from '../utils/api'
/* Import Action */
import { fetchPens, deletePen, votePen } from '../actions/pen'
import { closePenModal } from '../actions/modal'

class ListView extends Component {

    componentDidMount() {
      this.props.dispatch(closePenModal())
      const category = this.props.match.params.category || false
      this.getPens(category)

    }

    componentWillReceiveProps( newProps ) {
        if(newProps.match.params.category !== this.props.match.params.category){
            const category = newProps.match.params.category || false
            this.getPens(category)
        }
    }

    getPens(category) {
      category ?
      getPosts(category).then(pens => this.props.dispatch(fetchPens(pens)))
      :
      getAllPosts().then(pens => this.props.dispatch(fetchPens(pens)))
    }

    handleDelete = ( penid ) => {
        deletePost( penid ).then(pen => this.props.dispatch(deletePen( pen )))
    }

    vote = ( id, score ) => {
        votePost( id, score ).then(pen => this.props.dispatch(votePen( pen )))
    }

    render() {
        const pens = this.props.pens
        return (
          <div>
            <Modal/>
            <TopNav title={`Pen-it`}/>
            <Categories/>
            <Posts
            pens={pens}
            delete={this.handleDelete}
            vote={this.vote}
            />
            <BottomSort/>
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    pens: state.pen.pens
})

export default connect(mapStatetoProps)(ListView)

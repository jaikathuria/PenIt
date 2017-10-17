import React, { Component } from 'react'
import { connect } from 'react-redux'
/* React Components */
import TopNav from './TopNav'
import Categories from './Categories'
import Posts from './Posts'
import BottomSort from './BottomSort'
/* Import API methods */
import { getAllPosts, getPosts } from '../utils/api'
/* Import Action */
import { fetchPens } from '../actions/pen'

class ListView extends Component {

    componentDidMount() {
      const category = this.props.match.params.category || false
      this.getPens(category)

    }

    componentWillReceiveProps( newProps ) {
        if(newProps.match.params.category !== this.props.match.params.category){
            const category = newProps.match.params.category || false
            category && this.getPens(category)
        }
    }

    getPens(category) {
      category ?
      getPosts(category).then(pens => this.props.dispatch(fetchPens(pens)))
      :
      getAllPosts().then(pens => this.props.dispatch(fetchPens(pens)))
    }

    render() {
        const pens = this.props.pens
        return (
          <div>
            <TopNav title={`Pen-it`}/>
            <Categories/>
            <Posts
            pens={pens}/>
            <BottomSort/>
          </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    pens: state.pen.pens
})

export default connect(mapStatetoProps)(ListView)

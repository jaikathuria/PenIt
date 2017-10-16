import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends Component {
    render () {
        const categories = this.props.category.categories
        return (
          <div className="container nav-margin">
            <div className="row">
              <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                <ul className="nav nav-pills nav-justified category">
                  { categories.map((category,index) => (
                    <li key={index}>
                      <Link to={`/${category.path}`}>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
const mapStatetoProps = ({ category }) => ({
    category
})

export default connect(mapStatetoProps)(Categories)

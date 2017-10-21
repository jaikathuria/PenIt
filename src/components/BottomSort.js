import React, { Component } from 'react'
import { connect } from 'react-redux'
/* Import Action */
import { dateSort, voteSort } from '../actions/sort'

class BottomSort extends Component {
    state = {
        sort:  'date-asc'
    }
    handleChange = (event) => {

      new Promise ((resolve,reject) => {
          this.setState({
              sort: event.target.value
          })
          resolve()
      }).then(()=>{
        switch (this.state.sort) {
          case 'date-asc':
              this.props.dispatch(dateSort(1))
              break
          case 'date-desc':
              this.props.dispatch(dateSort(-1))
              break
          case 'vote-asc':
              this.props.dispatch(voteSort(1))
              break
          case 'vote-desc':
              this.props.dispatch(voteSort(-1))
              break
          default:
              console.log(event.target.value)
        }
          
      })

    }
    render () {
        return (
          <nav className="navbar navbar-default navbar-fixed-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 padding-top-7">
                  <div className="text-center">
                    <select className="form-control roboto" name="sort" onChange={this.handleChange} value={this.state.sort}>
                      <option value="date-asc"> Date | Ascending </option>
                      <option value="date-desc"> Date | Descending </option>
                      <option value="vote-asc"> Vote | Ascending </option>
                      <option value="vote-desc"> Vote | Descending </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

const mapStatetoProps = (state) => ({
    sort: state.sortType
})

export default connect(mapStatetoProps)(BottomSort)

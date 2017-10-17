import React, { Component } from 'react'

export default class CommentInput extends Component {
    render () {
        return (
          <nav className="navbar navbar-default navbar-fixed-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <form>
                        <input type="text" className="form-control full-input top-10" placeholder="Author"/>
                        <input type="text" className="form-control full-input top-10" placeholder="Content" aria-describedby="sizing-addon1" />
                        <button type="submit" className="btn btn-default top-10">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

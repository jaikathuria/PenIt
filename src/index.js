/* React, Router, Redux Imprts */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/* Css Imports */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import reducer from './reducer'
import { fetchCategories } from './actions/categories'
import * as api from './utils/api'


const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const makeAPIcall = () => {
    api.getCategories().then(categories => {
      store.dispatch(fetchCategories(categories))
    })
}
makeAPIcall()

ReactDOM.render(
<Provider store = {store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker()

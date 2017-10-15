import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import * as api from './utils/api'
import { fetchPens } from './actions/pen'

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const makeAPIcall = () => {
    api.getAllPosts().then(data => {
        console.log("I am working!");
        store.dispatch(fetchPens(data))
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

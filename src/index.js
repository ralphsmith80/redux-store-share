import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import App from './App'
import './index.css'

import AppDep from 'redux-store-share-dep'

const store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>, document.getElementById('root')
// )

// ReactDOM.render(
//   <AppDep store={store}/>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Provider store={store}>
    <App>
      <AppDep store={store}/>
    </App>
  </Provider>, document.getElementById('root')
)
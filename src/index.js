import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from './reducers'
import './index.css';
import App from './components/App'

const store = createStore(appReducers)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
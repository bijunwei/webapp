import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import RouteMap from './router/routeMap.jsx'
import configstore from './store/store.js'
import { Provider } from 'react-redux'
import './css/css.css'
import './font/iconfont.css'

let store = configstore()


render(<Provider store = {store}><RouteMap history={hashHistory}/></Provider>, document.getElementById('root'))
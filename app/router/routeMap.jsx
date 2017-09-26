import React from 'react'
import {IndexRoute ,hashHistory, Route, Router}from 'react-router'

import City from '../containers/city/index.jsx'
import Detail from '../containers/detail/index.jsx'
import Home from '../containers/home/index.jsx'
import Search from '../containers/search/index.jsx'
import User from '../containers/user/index.jsx'
import NotFound from '../containers/user/404.jsx'
import App from '../containers/index.jsx'
import Login from '../containers/login/index.jsx'

class RouteMap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <Router history={this.props.history}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Home}></IndexRoute>
                        <Route path='/city' component={City}></Route>
                        <Route path='/login(/:router)' component={Login}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                        <Route path='/search/:type(/:keyWord)' component={Search}></Route>
                        <Route path='*' component={NotFound}></Route>
                    </Route>
                </Router>
            )
    }
}

export default RouteMap
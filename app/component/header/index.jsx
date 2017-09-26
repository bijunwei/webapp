import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import   {hashHistory   }from    'react-router'

import './style.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {

        return (
            <div id="Header" className=''>
                <span  onClick={this.backTo.bind(this)} className="iconfont  icon-houtui1 float-left">
               </span>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
    backTo() {
            window.history.back()

    }
}
export default Header
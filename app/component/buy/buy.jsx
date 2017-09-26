import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './buy.css'
import {hashHistory} from 'react-router'
class Buy extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }
    render() {
        return (
            <div id="buy">
                {
                this.props.isCollect ? <div className="yishoucang"  onClick={this.click.bind(this)}>已收藏</div> : <div className="shoucang" onClick={this.click.bind(this)} >收藏</div>
                }
                <div className="buy-showNumber">
                    <span className="iconfont icon-iconjian" onClick={this.subhandle.bind(this)}></span>
                    <span >{this.props.number}</span>
                    <span className="iconfont icon-iconjia" onClick={this.addhandle.bind(this)} ></span>
                </div>
                <div className="buy-botton" onClick={this.buy.bind(this)}>点击购买</div>
            </div>

        )
    }
    addhandle() {
        this.props.add()
    }
    subhandle() {
        this.props.sub()
    }
    click() {
        this.props.collectHandle()
    }
    buy(){
        this.props.buyHandle()
    }
}




export default Buy
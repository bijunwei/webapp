import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './userinfo.css'

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="user-userinfo">
                <img src={
            './app/img/detail/touxiang/touxiang' + parseInt((Math.random() * 3 + 1)) + '.jpg'
            } alt=""/>
                <p className="iconfont icon-yonghu">{this.props.userinfo.username?" 您好！"+this.props.userinfo.username:"您好! 请登录"}</p>
            </div>
        )
    }
}

export default UserInfo
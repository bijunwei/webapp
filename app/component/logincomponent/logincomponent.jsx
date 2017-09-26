import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './logincomponent.css'
class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div id='login'>
                <div><i className="iconfont icon-denglu" ></i><input type="text" onChange={this.changeHandleUser.bind(this)} placeholder="请输入账号" value={this.state.username}/></div>
                <div><i className="iconfont icon-mima"></i><input  type="text" onChange={this.changeHandlePass.bind(this)} placeholder="请输入密码"/>
                </div>
                <botton onClick={this.clickHandle.bind(this)}>登  录</botton>
            </div>
        )
    }
    changeHandleUser(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeHandlePass(event) {
        this.setState({
            password: event.target.value
        })
    }
    clickHandle() {
        let username = this.state.username
        this.props.login(username)
    }
}

export default LoginComponent
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as update_user from '../../action/update_info.js'
import { hashHistory } from 'react-router'
import Header from '../../component/header/index.jsx'
import LoginComponent from '../../component/logincomponent/logincomponent.jsx'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            check: true
        }
    }
    render() {
        return (
            <div >
            <Header title="登录" />
                {
            this.state.check ? <div>{"检查是否登录"}</div> : <LoginComponent login={this.login.bind(this)} />
            }
            </div>
        )
    }
    componentDidMount() {
        this.checkUser()
    }
    checkUser() {
        if (this.props.username.username) {
            this.toUserPage()
        } else {
            this.setState({
                check: false
            })
        }
    }
    toUserPage() {
        hashHistory.push('/')
    }
    //登录
    login(username) {
        //触发dispatch存储数据
        let userinfo =this.props.username
        userinfo.username=username
        this.props.up_username.update_info(userinfo)
        let router = this.props.params.router
        if (router) {
            hashHistory.push(router)
        } else {
            this.toUserPage()
        }
    }
}
function mapStateToProps(state) {
    return {
        username: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        up_username: bindActionCreators(update_user, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
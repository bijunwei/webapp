import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserInfo from '../../component/userinfo/userinfo.jsx'
import Header from '../../component/header/index.jsx'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as  typeCreators from '../../action/cellectaction.js'
import UserDetail from './subpage/userdetail.jsx'
class User extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <Header params={this.props.params} title='用户中心' backPage='/'></Header>
                <UserInfo userinfo={this.props.userinfo} />
                <UserDetail userinfo={this.props.userinfo}/>
            </div>
        )
    }
    componentDidMount() {
        let username = this.props.userinfo.username
        if (!username) {
            hashHistory.push('/login')
        }
    }
}
const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo,
        collectinfo: state.collectStore
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        collectAction: bindActionCreators(typeCreators, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
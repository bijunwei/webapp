import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../component/header/index.jsx'
import Info from './subpage/info.jsx'
import Comment from './subpage/comment.jsx'
import WindowUpToTOp from '../../component/windowup/windowup.jsx'
import BuyAndCollect from './subpage/buyandcollect.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as typeCreators from './../../action/cellectaction.js'
class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }
    render() {
        let id = this.props.params.id
        return (
            <div>
                <WindowUpToTOp />
                <Header title='商户详情' detailToBack={this.props.userinfo.username} />
                <Info infoId={id} />
                <BuyAndCollect infoId={id} collectAction={this.props.collectAction} collectinfo={
                    this.props.collectinfo
                } userinfo={this.props.userinfo} />
                <Comment infoId={id}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo,
        collectinfo:state.collectStore
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        collectAction:bindActionCreators(typeCreators,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)
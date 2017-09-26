import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../component/homeHeader/index.jsx'
import Ad from './subpage/ad.jsx'
import { connect } from 'react-redux'
import Carouse from '../../component/carouse/index.jsx'
import List from './subpage/list.jsx'
import WindowUpToTOp from '../../component/windowup/windowup.jsx'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <WindowUpToTOp />
                <HomeHeader username={this.props.username} cityName = {this.props.city_name.cityName}/>
                <Carouse/>
                <div style={{
                height: "15px"
            }}></div>
                <Ad/> { /*<div style={{height:"15px"}}></div>*/ }
                <List cityName={this.props.city_name.cityName}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        city_name: state.userinfo,
        username:state.userinfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
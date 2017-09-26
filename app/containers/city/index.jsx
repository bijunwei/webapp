import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as update_city from '../../action/update_info.js'
import Header from '../../component/header/index.jsx'
import CityShow from '../../component/cityShow/index.jsx'
import CityHot from '../../component/cityHot/index.jsx'
import { bindActionCreators } from 'redux'
class City extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <Header title='选择城市'></Header>
                <CityShow cityName = {this.props.cityName.cityName}></CityShow>
                <CityHot></CityHot>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        update_city: bindActionCreators(update_city, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
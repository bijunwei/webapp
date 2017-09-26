import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localstorage from '../util/localStore.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { USER_CITY_NAME } from '../config/localStorageKey.js'
import * as update_city from '../action/update_info.js'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div className="color">
            {this.state.initDone ? this.props.children : <div>加载中。。。</div>}</div>
        )
    }
    componentDidMount() {
        let cityName = localstorage.getItem(USER_CITY_NAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.update_city.update_info({
            cityName: cityName
        })
        this.setState({
            initDone: true
        })
    }
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        update_city: bindActionCreators(update_city, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
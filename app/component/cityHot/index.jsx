import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as updata_city from '../../action/update_info.js'
import localstorage from '../../util/localStore.js'
import {USER_CITY_NAME} from '../../config/localStorageKey.js'
import {bindActionCreators} from 'redux'
import './style.css'
class CityHot extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id ="cityHot">
            <h3>热门城市</h3>
            <ul className="clear-fix">
                <li  onClick={this.getNewCity.bind(this,"北京")}><span>北京</span></li>
                <li  onClick={this.getNewCity.bind(this,"杭州")}><span>杭州</span></li>
                <li  onClick={this.getNewCity.bind(this,"上海")}><span>上海</span></li>
                <li  onClick={this.getNewCity.bind(this,"苏州")}><span>苏州</span></li>
                <li  onClick={this.getNewCity.bind(this,"广州")}><span>广州</span></li>
                <li  onClick={this.getNewCity.bind(this,"昆明")}><span>昆明</span></li>
                <li  onClick={this.getNewCity.bind(this,"天津")}><span>天津</span></li>
                <li  onClick={this.getNewCity.bind(this,"上海")}><span>上海</span></li>
                <li  onClick={this.getNewCity.bind(this,"合肥")}><span>合肥</span></li>
                <li  onClick={this.getNewCity.bind(this,"厦门")}><span>厦门</span></li>
                <li   onClick={this.getNewCity.bind(this,"武汉")}><span>武汉</span></li>
                <li  onClick={this.getNewCity.bind(this,"长沙")}><span>长沙</span></li>
                <li  onClick={this.getNewCity.bind(this,"南昌")}><span>南昌</span></li>
                <li  onClick={this.getNewCity.bind(this,"深圳")}><span>深圳</span></li>
                <li  onClick={this.getNewCity.bind(this,"拉萨")}><span>拉萨</span></li>
                <li  onClick={this.getNewCity.bind(this,"大连")}><span>乌鲁木齐</span></li>
            </ul>
            </div>
        )
    }
    getNewCity(city){
        //添加cookie
        localstorage.setItem(USER_CITY_NAME,city)
        this.props.newCityName.update_info({
            cityName:city
        })
    }
}


function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        newCityName: bindActionCreators(updata_city, dispatch)
    }
}
export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(CityHot)
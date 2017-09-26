import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../searchInput/index.jsx'
import './style.css'
class HomeHeader extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {

        return (

            <div className = 'home_header'>
                <div className='home-header-left float-left'>
                <Link className='link' to='/city'>
                    <span>{this.props.cityName}</span> <i className=' iconfont icon-xiafangxiang'></i>
                </Link>
                </div>
                <div className='home-header-right float-right'>
                <Link to={this.props.username.username?"/user":"/login"}>
                <i  className='iconfont icon-yonghu'></i>
                </Link>
                </div>
                <div className='home-header-middle'>
                <div className='home-header-middle-container'>
                    <i className='iconfont icon-sousuo'></i>
                    <SearchInput value="" jumpHash={this.handleHash.bind(this)} />
                </div>
                </div>
            </div>
        )
    }
    handleHash(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}
export default HomeHeader
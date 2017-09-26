import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../searchInput/index.jsx'
import { hashHistory } from 'react-router'
import './style.css'
class SearchHeader extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id='searchHeader' className="clear-fix">
                <i onClick={this.goBack.bind(this)} className='i float-left  iconfont  icon-houtui1'></i>
                <div> <i className='iconfont icon-sousuo'></i><SearchInput value={this.props.keyWordParams} jumpHash={this.handleHash.bind(this)}/>
                    </div>
            </div>
        )
    }
    handleHash(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
    goBack() {
        window.history.back()
    }
}
export default SearchHeader
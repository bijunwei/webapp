import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './searchInputStyle.css'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            keyWordParams: ''
        }
    }
    render() {
        return (
            <input id='input' type="text" placeholder='请输入关键字' value ={this.state.keyWordParams} onChange={
            this.searchGetvalue.bind(this)} onKeyUp = {this.enterBotton.bind(this)}
            type="text"/>
        )
    }
    componentDidMount() {
        // 默认值
        this.setState({
            keyWordParams: this.props.value || ''
        })
    }
    searchGetvalue(event) {
        this.setState({
            keyWordParams: event.target.value || ''
        })
    }
    enterBotton(event) {
        if (event.keyCode !== 13) {
            return
        }
        this.props.jumpHash(event.target.value)
    }
}

export default SearchInput
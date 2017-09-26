import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../component/searchHeader/index.jsx'
import SearchList from './subpage/searchList.jsx'
import { connect } from 'react-redux'
import WindowUpToTOp from '../../component/windowup/windowup.jsx'
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id='search'>
                <WindowUpToTOp />
                <SearchHeader keyWordParams={this.props.params.keyWord}/>
                <SearchList keyWordParams={this.props.params.keyWord} typeParams={this.props.params.type} cityName={this.props.cityName}/>
            </div>
        )
    }
}
function mapStateToPorps(state) {
    return {
        cityName: state.userinfo
    }
}
function mapDispatchToProps(Dispatch) {
    return {}
}
export default connect(
    mapStateToPorps,
    mapDispatchToProps
)(Search)
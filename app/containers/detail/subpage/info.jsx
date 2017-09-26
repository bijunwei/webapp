import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import InfoComponent from '../../../component/info/infocomponent.jsx'
import { getDetailDateInfo } from '../../../fetch/detail/getDetailData.js'
class Info extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            hasMore: false,
            data: {}
        }
    }
    render() {
        return (
            <div id="info">
            {
            this.state.data ? <InfoComponent data = {this.state.data} /> : <div>加载中。。。</div>
            }
            </div>
        )
    }
    componentDidMount() {
        let url = this.props.infoId
        let PromiseData = getDetailDateInfo(url)
        PromiseData.then(res => res.json()).then((json) => {
            this.setState({
                data: json.dataList
            })
        })
    }
}
export default Info
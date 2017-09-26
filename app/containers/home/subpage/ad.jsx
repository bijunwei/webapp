import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdDate } from '../../../fetch/home/getHomeData.js'
import HomeAd from '../../../component/homeAd/index.jsx'

class Ad extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
            {
            this.state.data.length ? <HomeAd data ={this.state.data} /> : <div>加载中。。</div>
            }
            </div>
        )
    }
    componentDidMount() {
        let adPromise = getAdDate()
        let adPromiseData = adPromise.then((res) => {
            return res.json()
        }).then((json) => {
            if (json.errno === 0) {
                this.setState({
                    data: json.data
                })
            }
        })
    }

}

export default Ad
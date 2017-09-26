import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdDate } from '../../fetch/home/getHomeData.js'

import './style.css'

class HomeAd extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <h2 className="ad_title">超值特惠</h2>
                <div className="ad_container  clear-fix">
                    {
            this.props.data.map((val, index) => {
                return <div className="ad_container_list float-left" key={index}>
                            <a href={val.link}>
                                <img src={val.img} alt=""/>
                            </a>
                        </div>
            })
            }
                </div>
            </div>
        )
    }
}
export default HomeAd
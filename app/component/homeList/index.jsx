import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import getListDate from '../../fetch/home/getHomeData.js'
import { Link } from 'react-router'
import './style.css'

class HomeList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div id="home-list">
                <div className='list'>
                    {
            this.props.data.map((val, index) => {
                return <div className="list-container clear-fix" key={index}>
                            <div className="list-container-img float-left">
                            <Link to={'/detail/' + val.id}>
                            <img src={val.img} alt=""/>
                            </Link>
                            </div>
                            <div className="list-container-text float-left">
                                <div className="list-container-text-title clear-fix">
                                <h2 className="float-left">{val.title}</h2>
                                <span className="float-right">{val.distance}</span>
                                </div>
                                <p>{val.subTitle}</p>
                                <div className="list-container-text-foot clear-fix">
                                    <span className="list-container-text-foot-left float-left">${val.price}</span>
                                    <span className="list-container-text-foot-right float-right">已售{val.number}</span>
                                </div>
                            </div>
                        </div>
            })
            }
                </div>
            </div>
        )
    }
}
export default HomeList
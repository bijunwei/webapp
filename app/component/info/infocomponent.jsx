import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../star/star.jsx'
import './infocomponentstyle.css'
class InfoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        let data = this.props.data
        return (
                <div id="infocomponent" >
                <div className="clear-fix Infocomponent">
                    <img src={data.img} alt=""/>
                    <div className="info-container">
                    <h1 className="info-container-title">{data.title}</h1>
                    <Star value = {data.star} />
                    <p className="info-container-subTitle">{data.subTitle}</p>
                    <p className="info-container-kouwei">
                        <span>口味:{data.kouwei}</span>
                        <span>环境:{data.huanjing}</span>
                        <span>服务:{data.fuwu}</span>
                    </p>
                </div>
                </div>
                <p className="info-adr iconfont icon-dizhi">{data.adr}</p>
                <p className="info-phone iconfont icon-dianhua">{data.phone}</p>

                <div className="info-desc">

                    <p dangerouslySetInnerHTML={{__html:data.desc}}></p>
                    <h1></h1>
                </div>
                </div>
        )
    }
    componentDidMount() {

    }
}
export default InfoComponent
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class CityShow extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="cityShow"><h2>{this.props.cityName}</h2></div>
        )
    }
}
export default CityShow
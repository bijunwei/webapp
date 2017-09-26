import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './starstyle.css'
class Star extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        let star = this.props.value
        return (
            <div id="star">
                    {
            [1, 2, 3, 4, 5].map((item, index) => {
                let lightClass = star >= item ? "light" : ''
                return <i key={index} className={"iconfont icon-xing " +lightClass}></i>
            })
            }
                </div>
        )
    }

}
export default Star
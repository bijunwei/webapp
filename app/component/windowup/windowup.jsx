import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class WindowUpToTOp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
                <div onClick={this.windowUp} ref='scrollToWeb' style={{
                'position': 'fixed',
                'right': '70px',
                'bottom': '129px',
                'width': '33px',
                'display': 'none'
            }}>
                <img style={{
                'width': '64px'
            }} src="./app/img/getBack/getBack.png" alt=""/>
                 </div>
        )
    }
    componentDidMount() {
        let div = this.refs.scrollToWeb
        //获取屏幕（视口高度）高度
        let viewprot = window.innerHeight
        let timer
        window.addEventListener('scroll', () => {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                //获取上卷高度
                let top = document.body.scrollTop
                if (top > viewprot) {
                    div.style.display = 'block'
                } else {
                    div.style.display = 'none'
                }
            }, 50)
        })
    }
    windowUp() {
        window.scrollTo(0, 0)
    }
}
export default WindowUpToTOp
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//import './style.less'

class LoadNextPage extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id='homeLoadMore'>
                {
            this.props.loadState ? <p  style={{
                "textAlign": "center",
                "fontSize": "18px",
                "padding": "10px 0",
                "backgroundColor": "#F2F1F2"
            }} >加载中。。。</p> : <p ref='more' style={{
                "textAlign": "center",
                "fontSize": "10px 0",
                "padding": "10px 0",
                "backgroundColor": "#F2F1F2"
            }} onClick={this.ClickMoreDom.bind(this)} >加载更多</p>
            }
            </div>
        )
    }
    ClickMoreDom() {
        this.props.getNextDataFn();
    }
    componentDidMount() {
        let timer
        //获取元素
        let dom = this.refs.more
        //视口高度
        let viewprot = window.innerHeight
        //添加监听函数
        window.addEventListener('scroll', () => {
            //总高度
            /* let top = document.body.offsetHeight*/
            // console.log(top)
            //获取卷上的高度
            /*let topScroll = document.body.scrollTop
            console.log(topScroll)*/
            //获取元素距离上视口顶部的距离
            if (this.props.loadState) {
                return
            }
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                let Top = dom.getBoundingClientRect().top
                if (Top && Top < viewprot) {
                    this.props.getNextDataFn()
                }
            }, 100)
        })
    }
}

export default LoadNextPage
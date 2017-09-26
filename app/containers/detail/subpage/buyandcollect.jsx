import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Buy from '../../../component/buy/buy.jsx'
import { hashHistory } from 'react-router'
class BuyAndCollect extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isCollect: false,
            number: 0
        }
    }
    render() {
        return (
            <div style={{
                "index": 99,
                "backgroundColor": 'white',
                "width": '100%',
                "position": 'fixed',
                "left": 0,
                "right": 0,
                "bottom": 0
            }}>
                <Buy  isCollect = {this.state.isCollect} collectHandle={this.collectHandle.bind(this)} add={this.add.bind(this)} sub={this.sub.bind(this)} number={this.state.number} buyHandle={this.buyHandle.bind(this)}/>

            </div>
        )
    }
    componentDidMount() {
        this.isCollected()
        //console.log(this)
    }
    //加方法
    add() {
        this.setState({
            number: this.state.number + 1
        })
    }
    //减方法
    sub() {
        this.setState({
            number: this.state.number - 1 < 0 ? 0 : this.state.number - 1
        })
    }

    //点击购买时检查是否登录
    isLoginCheck() {
        let id = this.props.infoId
        let username = this.props.userinfo.username
        if (!username) {
            //没有用户名跳转到登录页面并且要带reouter参数
            hashHistory.push('/login/' + encodeURIComponent('detail/' + id))
            return false
        }
        return true
    }
    //购买
    buyHandle() {
        let loginresult = this.isLoginCheck()
        if (!loginresult) {
            return
        }
        hashHistory.push('/User')
    }
    //是否已经收藏
    isCollected() {
        let id = this.props.infoId
        //收集的商品的id集合
        let idCollect = this.props.collectinfo
        console.log(idCollect)
        idCollect.some(item => {
            if (item.id === id) {
                this.setState ({
                    isCollect: true
                })
                return true
            }
        })
    }
    //收藏事件
    collectHandle() {
        if(!this.isLoginCheck()){
            return
        }
        let id = this.props.infoId
        //dispatch方法
        let collectAction = this.props.collectAction
        if (this.state.isCollect) {
            collectAction.rm({
                id: id
            })
        } else {
            collectAction.add({
                id: id
            })
        }
      this.setState({
            isCollect: !this.state.isCollect
        })
    }
}
export default BuyAndCollect
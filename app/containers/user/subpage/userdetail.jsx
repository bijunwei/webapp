import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import WindowUpToTOp from '../../../component/windowup/windowup.jsx'
import UserList from '../../../component/userlist/userlist.jsx'
import LoadNextPage from '../../../component/homeHasMore/index.jsx'
import getUserdata from '../../../fetch/user/getuserdata.js'
import './userdetail.css'
class UserDetail extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            zhuangtai: 'quanbu',
            hasMore: false,
            loadMore: false,
            page: 0,
            data: [],
        }
    }
    render() {
        return (
            <div id="user-userdetail">
                <ul>
                    <li ref='one' className="backgroundAndBottomColor" onClick={this.oneLi.bind(this, 'quanbu')} >全部订单</li>
                    <li ref='two' onClick={this.twoLi.bind(this, 'daifukuan')}>待付款</li>
                    <li ref='three' onClick={this.threeLi.bind(this, 'keyong')}>可使用</li>
                    <li ref='four' onClick={this.fourLi.bind(this, 'tuihuo')}>退款/售后</li>
                </ul>
                <UserList data={this.state.data} />
                {
            this.state.hsaMore ? <LoadNextPage getNextDataFn={this.getNextDataFn.bind(this)} loadMore={this.state.loadMore} /> : <div>没有了</div>
            }
                <WindowUpToTOp />
            </div>
        )
    }
    componentDidMount() {
        this.firstHandleData()
    }
    //去掉所有的类方法
    removeClassName(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].className = ''
        }
    }
    //第一次渲染数据
    firstHandleData() {
        this.setState({
            loadMore: true
        })
        let username = this.props.userinfo.username
        let result = getUserdata(username)
        this.handleData(result, 'quanbu')
        this.setState({
            loadMore: false
        })
    }
    //获得数据
    getNextDataFn() {
        this.setState({
            loadMore: true
        })
        let username = this.props.userinfo.username
        let result = getUserdata(username)
        let zhuangtai = this.state.zhuangtai
        this.handleData(result, zhuangtai)
        this.setState({
            loadMore: false
        })
    }
    //点击获取数据
    clickGetData(val) {
        this.setState({
            loadMore: true
        })
        let username = this.props.userinfo.username
        let result = getUserdata(username)
        this.clickHandleData(result, val)
        this.setState({
            loadMore: false
        })
    }
    clickHandleData(result, zhuangtai) {
        result.then(res => res.json()).then(json => {
            //if()conso
            let jsonData = json.data;
            if (zhuangtai === "quanbu") {
                this.setState({
                    data: this.state.data.concat(jsonData),
                    hsaMore: json.hasMore,
                    page: this.state.page + 1
                })
                return
            } else {
                let handledData = jsonData.filter(item => {
                    if (item.zhuangtai === zhuangtai) {
                        return item
                    }
                })
                this.setState({
                    data: handledData,
                    hsaMore: json.hasMore,
                    page: this.state.page + 1
                })
            }
        })
    }
    //处理数据
    handleData(result, zhuangtai) {
        result.then(res => res.json()).then(json => {
            let jsonData = json.data;
            if (zhuangtai === "quanbu") {
                this.setState({
                    data: this.state.data.concat(jsonData),
                    hsaMore: json.hasMore,
                    page: this.state.page + 1
                })
            } else {
                let handledData = jsonData.filter(item => {
                    if (item.zhuangtai === zhuangtai) {
                        return item
                    }
                })
                this.setState({
                    data: this.state.data.concat(handledData),
                    hsaMore: json.hasMore,
                    page: this.state.page + 1
                })
            }
        })
    }
    //获取所有的li方法
    getAllLi() {
        let one = this.refs.one
        let two = this.refs.two
        let three = this.refs.three
        let four = this.refs.four
        let arr = [one, two, three, four]
        return arr
    }
    oneLi(val) {
        let arr = this.getAllLi()
        this.removeClassName(arr),
        arr[0].className = "backgroundAndBottomColor"
        this.setState({
            zhuangtai: val
        })
        this.clickGetData(val)
    }
    twoLi(val) {
        let arr = this.getAllLi()
        this.removeClassName(arr),
        arr[1].className = "backgroundAndBottomColor"
        this.setState({
            zhuangtai: val
        })
        this.clickGetData(val)
    }
    threeLi(val) {
        let arr = this.getAllLi()
        this.removeClassName(arr),
        arr[2].className = "backgroundAndBottomColor"
        this.setState({
            zhuangtai: val
        })
        this.clickGetData(val)
    }
    fourLi(val) {
        let arr = this.getAllLi()
        this.removeClassName(arr),
        arr[3].className = "backgroundAndBottomColor"
        this.setState({
            zhuangtai: val
        })
        this.clickGetData(val)
    }
}
export default UserDetail
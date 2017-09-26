import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'
import HomeList from '../../../component/homeList/index.jsx'
import { getListDate } from '../../../fetch/home/getHomeData.js'
import LoadNextPage from '../../../component/homeHasMore/index.jsx'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],
            hasMore: true,
            page: 0,
            loadMore: false
        }
    }
    render() {
        return (
            <div>
            <h2  style={{
                "textAlign": "center",
                "fontSize": "18px",
                "padding": "10px 0",
                "backgroundColor": "white"
            }}>猜你喜欢</h2>
                {
            this.state.data.length ? <HomeList data ={this.state.data} /> : <div>加载中。。</div>
            }
                {
            this.state.hasMore ? <LoadNextPage loadState={this.state.loadMore}  getNextDataFn={
            this.getNextDataFn.bind(this)
            }></LoadNextPage> : <div style={{
                "textAlign": "center",
                "fontSize": "18px",
                "padding": "10px 0",
                "backgroundColor": "#F2F1F2"
            }}> 没有更多了</div>
            } </div>
        )
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        let cityName = this.props.cityName
        let listPromise = getListDate(cityName, 0)
        this.handlePromise(listPromise)
    }
    //新增数据
    getNextDataFn() {
        this.setState({
            loadMore: true
        })
        let cityName = this.props.cityName
        let listPromise = getListDate(cityName, this.state.page)
        this.handlePromise(listPromise)
        this.setState({
            loadMore: false,
            page: this.state.page + 1
        })
    }
    //处理对象（数据）
    handlePromise(listPromise) {
        listPromise.then(res => {
            return res.json()
        }).then(json => {
            //获取data和hasMore
            let data = json.dataList
            let hasMore = json.hasMore
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页‘获取更多’获取数据报错, ', ex.message)
            }
        })
    }
}
export default List
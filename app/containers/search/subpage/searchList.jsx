import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeList from '../../../component/homeList/index.jsx'
import LoadNextPage from '../../../component/homeHasMore/index.jsx'
import getSearchData from '../../../fetch/search/getSearchData.js'
class SearchList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],
            hasMore: false,
            page: 0,
            loadMore: false
        }
    }
    render() {
        return (
            <div>
                 {this.state.data.length ? <HomeList data={this.state.data}/> : <div>加载中。。。</div>}
                 {this.state.hasMore ? <LoadNextPage getNextDataFn={this.getNextDataFn.bind(this)} loadState={this.state.loadMore}/> : <div>没有更多了</div>}
            </div>
        )
    }
    componentDidMount() {
        //加载首次数据
        this.firstGetDataPromise()
    }
    //首次加载获得Promise对象方法
    firstGetDataPromise() {
        let cityName = this.props.cityName
        let typeParams = this.props.typeParams
        let keyWordParams = this.props.keyWordParams || ''
        let PromiseData = getSearchData(cityName, typeParams, keyWordParams, 0)
        this.handleData(PromiseData)
    }
    //加载更多处理数据
    getNextDataFn() {
        this.setState({
            loadMore: true
        })
        let cityName = this.props.cityName
        let typeParams = this.props.typeParams
        let keyWordParams = this.props.keyWordParams || ''
        let page = this.state.page
        let PromiseData = getSearchData(cityName, typeParams, keyWordParams, page)
        this.handleData(PromiseData)
        this.setState({
            loadMore: false,
        })
    }
    //处理数据对象
    handleData(PromiseData) {
        PromiseData.then(res => res.json()).then(json => {
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore,
                page: this.state.page + 1,
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        let keyWord = this.props.keyWordParams
        let type = this.props.typeParams
        if (keyWord === prevProps.keyWordParams && type === prevProps.typeParams) {
            return
        }
        this.setState({
            data: [],
            hasMore: false,
            page: 0,
            loadMore: false
        })
        this.firstGetDataPromise()
    }
/*    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        console.log(1)
    }*/
}
export default SearchList
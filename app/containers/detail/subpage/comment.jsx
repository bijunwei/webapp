import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getDetailDateComment} from '../../../fetch/detail/getDetailData.js'
import CommentList from '../../../component/detaillist/detaillist.jsx'
import LoadNextPage from '../../../component/homeHasMore/index.jsx'
class Comment extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            data:[],
            hasMore:false,
            page:0,
            loadMore:false
        }
    }
    render(){
        return(
            <div id="comment">
            {
                this.state.data.length?<CommentList data = {this.state.data}/>:<div>加载中。。。</div>
            }
            {
                this.state.hasMore ?<LoadNextPage loadState={this.state.loadMore} getNextDataFn={this.nextGetData.bind(this)}/>:<div>没有更多了</div>
            }
            </div>
            )
    }
    componentDidMount(){
        //首此加载
        this.firstGetData()
    }
    firstGetData(){
        let page = this.state.page
        let  id = this.props.infoId
        //处理数据
        let getPromise = getDetailDateComment(page,id)
        this.handleData(getPromise)
    }
    nextGetData(){
        this.setState({
            loadMore:true
        })
        let page = this.state.page
        let  id = this.props.infoId
        //处理数据
        let getPromise = getDetailDateComment(page,id)
        this.handleData(getPromise)
        this.setState({
            loadMore:false
        })
    }
    handleData(getPromise){
        getPromise.then(res=>res.json()).then((json)=>{
            this.setState({
                page:this.state.page+1,
                data:this.state.data.concat(json.data),
                hasMore:json.hasMore
            })
        })
    }
}
export default Comment
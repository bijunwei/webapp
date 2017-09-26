import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import postData from '../../fetch/user/postData.js'
import './commentcomponent.css'
class CommentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            commentState: this.props.item.commentState
        }
    }
    render() {
        let item = this.props.item
        return (
            <div className="user-userlist-container" >
                            <div>
                                <img src={item.img} alt=""/>
                                <div className="user-userlist-container-content">
                                    <h1>{item.title}</h1>
                                    <h3>{item.subTitle}</h3>
                                    <p>
                                        <span className="user-userlist-container-content-price iconfont icon-qian">{item.price}</span>
                                        {this.state.commentState === 0 ? <span className="user-userlist-container-content-comment"  onClick={this.subclickcomment.bind(this)} >评价</span> : this.state.commentState === 1 ? '' : <span className="user-userlist-container-content-commented" >已评价</span>}
                                    </p>
                                </div>
                            </div>
                            {this.state.commentState === 1 ? <div className= 'comment-textarea'>
                                <textarea ref="commentTextarea" name="" id="" cols="30" rows="10"></textarea>
                                <div>
                                    <botton  ></botton>
                                    <botton className="comment-botton" onClick={this.offTextarea.bind(this)} >取消</botton>
                                    <botton  ></botton>
                                    <botton className="comment-botton" onClick={this.onTextarea.bind(this)} >确定</botton>
                                    <botton ></botton>
                                </div>
                            </div> : ''}
                    </div>
        )
    }
    componentDidMount() {
        this.setState({
            commentState: this.props.item.commentState
        })
    }
    //点击评论
    subclickcomment() {
        this.setState({
            commentState: 1
        })
    }
    //关闭评论框
    offTextarea() {
        this.setState({
            commentState: 0
        })
    }
    //确定提交评论
    onTextarea() {

        let id = this.props.item.id
        let ele = this.refs.commentTextarea
        let commentContent = ele.value.trim()
        if(!commentContent){
            return
        }
        let result = postData(id, commentContent)
        console.log(result)
        result.then(res=>res.json()).then(json=>{
            if(json.errno ==0){
                this.callback()
            }
        })

    }
    callback(){
        this.setState({
            commentState: 2
        })
    }
}
export default CommentComponent
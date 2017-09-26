import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../component/star/star.jsx'
import './detailliststyle.css'
class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="comment">
                <h1>用户点评</h1>
                    {
            this.props.data.map((item, index) => {
                return <div className="comment-container clear-fix" key={index}>
                                <div className="comment-container-touxiang float-left"><img src={item.touxiang} alt=""/></div>
                                <div className="comment-container-container">
                                    <p className="comment-container-username">{item.username}</p>
                                    <Star value={item.star}/>
                                    <p className="comment-container-comment">{item.comment}</p>
                                    <div className="comment-img">
                                    <img src={item.img1} alt=""/>
                                    <img src={item.img2} alt=""/>
                                    <img src={item.img3} alt=""/></div>
                                </div>
                            </div>
            })
            }
            </div>
        )
    }
}
export default CommentList
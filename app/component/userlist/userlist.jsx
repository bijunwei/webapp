import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import WindowUpToTOp from '../windowup/windowup.jsx'
import CommentComponent from '../../component/commentcomponent/commentcomponent.jsx'
import  './userlist.css'
class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        let commentState = this.props.commentState
        return (
            <div id="user-userlist">
                {this.props.data.map((item,index)=>{
                    return  <CommentComponent item={item} key={index} />
                })
            }
            </div>
        )

    }
}

export default UserList
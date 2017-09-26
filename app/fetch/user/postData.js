import post from '../post.js'


const  postData = (id,comment)=>{

        let result  = post('/api/submitComment',{
            id:id,
            comment:comment
        })

        return result
}

export default postData
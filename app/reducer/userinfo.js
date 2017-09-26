import * as acitonTypes from '../constants/userinfo.js'

const initialState = {
    a: '默认数据'
}


const updateInfo = (state = initialState, action) => {
    switch (action.type) {
    case acitonTypes.USER_INFO:
        return action.data;
    default:
        return state
    }
}

export default updateInfo

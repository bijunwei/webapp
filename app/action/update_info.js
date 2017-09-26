import * as actionType from '../constants/userinfo.js'
const update_info = (data) => {
    return {
        type: actionType.USER_INFO,
        data
    }
}
export { update_info}

import updateInfo from './userinfo.js'
import { combineReducers } from 'redux'
import collectStore from './collectstore.js'
const rootReducer = combineReducers({
    userinfo: updateInfo,
    collectStore
})

//总规则
export default rootReducer
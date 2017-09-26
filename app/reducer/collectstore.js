import * as actionType from '../constants/collect.js'

let initialState = []


const collectStore = (state = initialState, action) => {
    switch (action.type) {
    case actionType.COLLECT_UPDATE:
        return action.data

    case actionType.COLLECT_ADD:
        state.unshift(action.data)
        return  state

    case actionType.COLLECT_RM:
        return state.filter(item => {
            if (item.id !== action.data.id) {
                return item
            }
        })
    default:
        return state;
    }
}

export default collectStore
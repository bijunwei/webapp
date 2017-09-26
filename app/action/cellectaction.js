import * as actionType from '../constants/collect.js'
function update(data) {
    return {
        type: actionType.COLLECT_UPDATE,
        data
    }
}
function add(data) {
    return {
        type: actionType.COLLECT_ADD,
        data
    }
}
function rm(data) {
    return {
        type: actionType.COLLECT_RM,
        data
    }
}
export { update, add, rm }
import get from '../get.js'

const getDetailDateInfo = (id) => {
    let url = '/api/detail/info/' + id
    let result = get(url)
    return result
}

const getDetailDateComment = (page, id) => {
    let url = '/api/detail/comment/' + page +'/'+ id
    let result = get(url)
    return result
}


export { getDetailDateInfo, getDetailDateComment }
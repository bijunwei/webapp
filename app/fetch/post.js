import 'whatwg-fetch'
import 'es6-promise'

const paramsObj = (obj) => {
    let result = ''
    for (let key in obj) {
        result += '&' + key + '=' + obj[key]
    }

    if (result) {
        result = result.slice(1)
    }
    return result
}

const post = (url, obj) => {
    let promisePost = fetch(url, {
        method: 'post',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: paramsObj(obj)
    })
    return promisePost
}

export default post
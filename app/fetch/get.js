import 'whatwg-fetch'
import 'es6-promise'

const get = (url) => {
    let promiseGet = fetch(url, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        }
    })
    return promiseGet
}

export default get
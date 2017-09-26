import get from '../get.js'


const getAdDate = () => {
    let result = get("/api/homead")
    return result
}

const getListDate = (city, page) => {
    let result = get("/api/homeList/" + encodeURIComponent(city) + '/' + page)
    return result
}
export {
    getAdDate,
    getListDate
}
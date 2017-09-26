import get from '../get.js'

const getSearchData = (city, type, keyWord, page) => {
    let keyWordStr = keyWord ? '/' + keyWord : '';
    let url = '/api/search/' + encodeURIComponent(city) + '/' + type + '/' + page + keyWordStr
    let result = get(url)
    return result
}

export default getSearchData
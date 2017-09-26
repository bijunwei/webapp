import get from '../get.js'

const getUserdata = (username) => {
    const result = get('/api/userlist/' + username)
    return result
}





export default getUserdata
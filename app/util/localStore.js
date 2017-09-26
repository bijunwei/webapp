export default {
    getItem(key) {
            let value
            try {
                value = localStorage.getItem(key)
            } catch (error) {
                if (_DEV_) {
                    console.log('localStorage.getItem报错1',
                        error.message)
                }
            } finally {
                return value
            }
        },
        setItem(key, value) {
            try {
                localStorage.setItem(key, value)
            } catch (error) {
                console.log('localStorage.setItem报错2',
                    error.message)
            }
        }
}
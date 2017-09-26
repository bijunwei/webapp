import {
    createStore
} from 'redux'
import rootReducer from '../reducer/index.js'



const configStore = (initialState) => {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}

export default configStore
/* import external modules */
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/* import internal modules */
import rootReducer from '../reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store

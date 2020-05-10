/* import external modules */
import { combineReducers } from 'redux'

/* import external modules */
import user from './user/user'

const rootReducer = combineReducers({
  user: user,
})

export default rootReducer

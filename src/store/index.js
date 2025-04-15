import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers/counter'
import userReducer from './reducers/user'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

const store = createStore(rootReducer)

export default store
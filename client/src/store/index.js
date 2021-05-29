import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import kycReducer from './reducers/kyc'

const rootReducer = combineReducers({
  user: userReducer,
  kyc: kycReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
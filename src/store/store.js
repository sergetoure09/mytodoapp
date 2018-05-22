import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {authReducer} from '../reducer/authReducer'

let reducers=combineReducers({
    auth:authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store=createStore(reducers,composeEnhancers(applyMiddleware(logger,thunk)))
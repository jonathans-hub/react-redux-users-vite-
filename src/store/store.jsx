import {legacy_createStore as createStore, applyMiddleware} from 'redux'
// import {usersReducer} from '../reducers/usersReducer'
// import thunk from 'redux-thunk'

export const store = createStore (usersReducer)

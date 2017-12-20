import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise'
import {composeWithDevTools} from 'remote-redux-devtools'
import rootReducer from './../reducers'
// const loggerMiddleware = createLogger()
// const createAppStore = applyMiddleware(thunkMiddleware, promise, loggerMiddleware)(
//     createStore
// );
const store = createStore(rootReducer)


export default store

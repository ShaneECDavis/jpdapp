import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
// want to use redux saga
import { composeWithDevTools } from 'redux-devtools-extension'

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// )

// const rootReducer = combineReducers({
//   exercises: exerciseReducer,
//   muscles: muscleReducer
// })

// const store = createStore(rootReducer, middleware, offline(config))
// export default store
// export * from './exercises'
// export * from './muscles'


const store = {}

export default store 
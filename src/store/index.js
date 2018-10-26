import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
// want to use redux saga

import { composeWithDevTools } from 'redux-devtools-extension'
import {excelSheetReducer} from './excelSheetReducer'

const middleware = composeWithDevTools(
  applyMiddleware( createLogger({ collapsed: true }))
)

const rootReducer = combineReducers({
  excelSheetReducer
})

const store = createStore(rootReducer, middleware)
export default store

export * from './excelSheetReducer'


import { combineReducers } from 'redux'
import codesReducer from '../feature/codeCurrency/codeSlice'
import exchangeReducer from '../feature/exchangeRate/exchangeSlice'

const rootReducer = combineReducers({
  codes: codesReducer,
  exchange: exchangeReducer,
})

export default rootReducer

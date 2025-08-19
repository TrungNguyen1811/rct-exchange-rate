import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer from './rootReducer'
import saga from './rootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(saga)

// render the application
export default store

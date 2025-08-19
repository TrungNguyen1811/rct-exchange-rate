import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import exchangeService from '../../services/exchangeService'

// worker Saga: will be fired on CODE_FETCH_REQUESTED actions
function* fetchCodes() {
  try {
    const response = yield call(exchangeService.getCodesCurrency)
    // nếu axios, response.data mới là data
    yield put({ type: 'CODES_GET_SUCCEEDED', payload: response.data })
  } catch (e) {
    yield put({ type: 'CODES_GET_FAILED', error: e.message })
  }
}

/*
  Starts fetchCodes on each dispatched `CODES_FETCH_REQUESTED` action.
  Allows concurrent fetches of code.
*/
function* codeSaga() {
  yield takeEvery('CODES_GET_REQUESTED', fetchCodes)
}

export default codeSaga

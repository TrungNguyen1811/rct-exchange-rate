import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import exchangeService from '../../services/exchangeService'

function* getExchangeRate(action) {
  try {
    const response = yield call(exchangeService.getExchangeRate, action.params)

    yield put({ type: 'EXCHANGE_GET_SUCCEEDED', payload: response.data })
  } catch (e) {
    yield put({ type: 'EXCHANGE_GET_FAILED', error: e.message })
  }
}

function* exchangeSaga() {
  yield takeEvery('EXCHANGE_GET_REQUESTED', getExchangeRate)
}

export default exchangeSaga

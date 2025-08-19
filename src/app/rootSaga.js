import { all } from 'redux-saga/effects'
import codeSaga from '../feature/codeCurrency/codeSaga'
import exchangeSaga from '../feature/exchangeRate/exchangeSaga'

export default function* rootSaga() {
  yield all([codeSaga(), exchangeSaga()])
}

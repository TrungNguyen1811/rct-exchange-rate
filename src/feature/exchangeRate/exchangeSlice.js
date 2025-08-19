const initialValue = {
  result: null,
  documentation: '',
  terms_of_use: '',
  time_last_update_unix: null,
  time_last_update_utc: '',
  time_next_update_unix: null,
  time_next_update_utc: '',
  base_code: 'USD',
  target_code: 'VND',
  conversion_rate: null,
}

function codesReducer(state = initialValue, action) {
  switch (action.type) {
    case 'EXCHANGE_GET_REQUESTED':
      return {
        ...state,
        loading: true,
        base_code: action.params.from,
        target_code: action.params.to,
      }

    case 'EXCHANGE_GET_SUCCEEDED':
      return {
        ...state,
        result: action.payload.result,
        documentation: action.payload.documentation,
        terms_of_use: action.payload.terms_of_use,
        time_last_update_unix: action.payload.time_last_update_unix,
        time_last_update_utc: action.payload.time_last_update_utc,
        time_next_update_unix: action.payload.time_next_update_unix,
        time_next_update_utc: action.payload.time_next_update_utc,
        base_code: action.payload.base_code,
        target_code: action.payload.target_code,
        conversion_rate: action.payload.conversion_rate,
        loading: false,
        errorType: null,
      }

    case 'EXCHANGE_GET_FAILED':
      return {
        ...state,
        loading: false,
        errorType: action.error,
      }

    default:
      return state
  }
}

export default codesReducer

export const getRequest = (params) => ({
  type: 'EXCHANGE_GET_REQUESTED',
  params,
})
export const getSuccess = (payload) => ({
  type: 'EXCHANGE_GET_SUCCEEDED',
  payload,
})
export const getFailure = (error) => ({ type: 'EXCHANGE_GET_FAILED', error })

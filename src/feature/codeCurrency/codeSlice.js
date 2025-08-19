const initialValue = {
  result: null,
  documentation: '',
  terms_of_use: '',
  supported_codes: [
    ['USD', 'United States Dollar'],
    ['VND', 'Vietnamese Đồng'],
  ],
  errorType: '',
  loading: false,
}

function codesReducer(state = initialValue, action) {
  switch (action.type) {
    case 'CODES_GET_REQUESTED':
      return { ...state, loading: true }

    case 'CODES_GET_SUCCEEDED':
      return {
        ...state,
        result: action.payload.result,
        documentation: action.payload.documentation,
        terms_of_use: action.payload.terms_of_use,
        supported_codes: action.payload.supported_codes,
        loading: false,
        errorType: null,
      }

    case 'CODES_GET_FAILED':
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

export const getRequest = () => ({ type: 'CODES_GET_REQUESTED' })
export const getSuccess = (payload) => ({
  type: 'CODES_GET_SUCCEEDED',
  payload,
})
export const getFailure = (error) => ({ type: 'CODES_GET_FAILED', error })

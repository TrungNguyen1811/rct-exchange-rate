import { instance } from './axios.js'

const exchangeService = {
  getCodesCurrency: async () => {
    return await instance.get('/codes')
  },

  getExchangeRate: async (param) => {
    return await instance.get(`/pair/${param.from}/${param.to}`)
  },
}

export default exchangeService

import axios from 'axios'

const configure = {
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
  },
}

const api = axios.create(configure)

export default api

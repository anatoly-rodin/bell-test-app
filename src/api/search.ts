import api from './api'

const loadItems = () => api({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/comments?_limit=100',
})

export {
  loadItems,
}

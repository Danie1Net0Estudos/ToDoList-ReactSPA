import axios from 'axios'

import { baseUrl } from '../environment'

class TodoService {
  constructor () {
    this.url = `${baseUrl}/todos`
  }

  all () {
    return axios.get(this.url)
  }

  create (toDo) {
    return axios.post(this.url, toDo)
  }

  show (id) {
    return axios.get(`${this.url}/${id}`)
  }

  update (toDo) {
    return axios.put(`${this.url}/${toDo.id}`, toDo)
  }

  delete (id) {
    return axios.delete(`${this.url}/${id}`)
  }
}

export default new TodoService()

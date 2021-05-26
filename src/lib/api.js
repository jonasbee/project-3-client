import axios from 'axios'

const baseUrl = '/api'

export function getAllItems() {
  return axios.get(`${baseUrl}/items`)
}


// const baseUrl = 'http://localhost:3000'

// export function registerUser(formdata) {
//   return axios.post(`${baseUrl}/register`, formdata)
// }

// export function loginUser(formdata) {
//   return axios.post(`${baseUrl}/login`, formdata)
// }

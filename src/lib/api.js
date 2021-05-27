import axios from 'axios'

const baseUrl = '/api'
// http://localhost:3000

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

export function getSharedInventoryItems() {
  return axios.get(`${baseUrl}/inventoryitemsmap`)
}
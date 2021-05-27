import axios from 'axios'
import jwt from 'jsonwebtoken'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

function getUserId() {
  const token = getToken()
  const decoded = jwt.verify(token, 'abubakarjonasdimitar')
  const userId = decoded.userId
  console.log(token)
  console.log(userId)
  return userId
}

export function getAllItems() {
  return axios.get(`${baseUrl}/items`)
}

export function getAllRecipes() {
  return axios.get(`${baseUrl}/recipes`)
}

export function register(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function login(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

export function getSharedInventoryItems() {
  return axios.get(`${baseUrl}/inventoryitemsmap`, headers())
}

export function getAllInventoryItems() {
  const userId = getUserId()
  return axios.get(`${baseUrl}/${userId}/items`, headers())
}
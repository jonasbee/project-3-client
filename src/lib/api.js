import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
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
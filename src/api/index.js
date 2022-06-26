import axios from 'axios'

const baseURL = 'http://localhost:3004'

export const login = data => axios.post(`${baseURL}/login`, data)
export const register = data => axios.post(`${baseURL}/register`, data)
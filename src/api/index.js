import axios from 'axios'

const baseURL = 'http://localhost:3004'

export const register = data => axios.post(`${baseURL}/register`, data)
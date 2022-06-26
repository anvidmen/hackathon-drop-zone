import axios from 'axios'

const baseURL = 'https://dropzone-server.herokuapp.com'

export const login = data => axios.post(`${baseURL}/login`, data)
export const register = data => axios.post(`${baseURL}/register`, data)
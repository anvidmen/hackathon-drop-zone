import { register } from 'api'

const registerUser = async (username, email, password) => {
    const data = { username, email, password }
    try {
        const response = await register(data)
        return response?.data
    } catch (error) {
        const { response } = error
        throw new Error(response.data)
    }
}

export default registerUser
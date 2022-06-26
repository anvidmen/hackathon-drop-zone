import { register } from 'api'

const registerUser = async (username, email, password) => {
    const data = { username, email, password }
    try {
        const response = await register(data)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

export default registerUser
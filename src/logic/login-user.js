import { login } from 'api'
import { auth } from 'utils/storage';

const loginUser = async (email, password) => {
    const data = { email, password }
    try {
        const response = await login(data)
        auth(response?.data)
        return response?.data
    } catch (error) {
        const { message } = error
        throw new Error(message)
    }
}

export default loginUser
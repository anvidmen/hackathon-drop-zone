import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import loginUser from "logic/login-user"
import InputForm from 'components/InputForm/InputForm'
import Swal from 'sweetalert2'
import '../Register/styles.sass'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        let { email, password } = e.target

        email = email.value
        password = password.value

        if (email.trim() === '' || password.trim() === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        }

        try {
            const user = await loginUser(email, password)
            navigate('/')
        } catch (error) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            })
        }
    }

    return (
        <div className='register-form'>
            <form onSubmit={handleSubmit}>
                <h2 className='header-title'>Bienvenido</h2>
                <InputForm
                    title="Email"
                    type="email"
                    placeholder="Introducir email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    autoComplete="email"
                />
                <InputForm
                    title='Contraseña'
                    type="password"
                    placeholder="Introducir contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    autoComplete="current-password"
                    required
                />
                <div className='row'>
                    <button>Acceder</button>
                </div>
                <div className='redirect'>
                    <span>¿No tienes cuenta?</span>
                    <Link to="/register">Regístrate</Link>
                </div>
            </form>
        </div>
    )
}

export default Login

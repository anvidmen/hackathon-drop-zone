import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerUser from 'logic/register-user'
import Swal from 'sweetalert2'
import InputForm from 'components/InputForm/InputForm'
import './styles.sass'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleLogin = user => {
        return Swal.fire({
            icon: 'success',
            text: `${user?.username}, te has registrado correctamente`
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        let { username, password, email } = e.target

        username = username.value
        password = password.value
        email = email.value

        if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        }

        try {
            const data =  await registerUser(username, email, password)
            handleLogin(data.user)
            navigate('/')
        } catch (error) {
            console.log(error)
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
                <h2 className='header-title'>Regístrate</h2>
                <InputForm
                    title='Nombre'
                    type='text'
                    placeholder='Introducir nombre'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id='username'
                    autoComplete='username'
                />
                <InputForm
                    title='Email'
                    type='email'
                    placeholder='Introducir email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    autoComplete='email'
                />
                <InputForm
                    title='Contraseña'
                    type='password'
                    placeholder='Introducir contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    autoComplete='current-password'
                    required
                />
                <div className='row'>
                    <button>Registrarse</button>
                </div>
                <div className='redirect'>
                    <span>¿Tienes cuenta?</span>
                    <Link to='/'>Iniciar sesión</Link>
                </div>
            </form>
        </div>
    )
}

export default Register

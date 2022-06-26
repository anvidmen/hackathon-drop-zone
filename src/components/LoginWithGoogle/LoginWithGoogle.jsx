import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import './styles.sass'

const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID

const LoginWithGoogle = () => {
    const token = gapi.auth?.getToken()

    const onSuccess = response => response
    const onError = response => response

    const onLogout = () => {
        gapi.auth.setToken(null)
        gapi.auth.signOut()
    }

    return (
        <div className='container-google'>
            <h1>Bienvenido a DDrop</h1>
            <p>Para subir tus archivos de forma simple a drive, puedes hacer Login a través de Google.</p>
            <hr />
            {
                token ?
                    <GoogleLogin
                        className='button-google'
                        clientId={CLIENT_ID}
                        onSuccess={onSuccess}
                        onFailure={onError}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    >
                        <span>Login con Google</span>
                    </GoogleLogin> :
                    <GoogleLogout
                        className='button-google'
                        client_id={CLIENT_ID}
                        onLogoutSuccess={onLogout}
                    >
                        <span>Logout</span>
                    </GoogleLogout>
            }

        </div>
    )
}

export default LoginWithGoogle

import { useState, useEffect } from 'react'
import axios from 'axios'
import DropzoneField from 'components/DropzoneField/DropzoneField'
import LoginWithGoogle from 'components/LoginWithGoogle/LoginWithGoogle'
import { gapi } from 'gapi-script'
import Swal from 'sweetalert2'
import './styles.sass'

const {
    REACT_APP_GOOGLE_DRIVE_CLIENT_ID, REACT_APP_GOOGLE_DRIVE_API_KEY,
    REACT_APP_GOOGLE_DRIVE_SCOPES, REACT_APP_GOOGLE_DRIVE_API_URL
} = process.env

const Dropzone = () => {
    const [files, setFiles] = useState([])
    const [fileErrors, setfileErrors] = useState([])

    const onUploadFiles = results => {
        const anyRejected = results.some(result => result.status === 'rejected')

        setFiles([])

        if (anyRejected) {
            return Swal.fire({
                icon: 'warning',
                text: 'Algunos archivos no se han podido subir a Google Drive'
            })
        }

        return Swal.fire({
            icon: 'success',
            text: 'Los archivos se han subido correctamente a Google Drive'
        })
    }

    const onDrop = (acceptedFiles, rejectedFiles) => {
        setFiles(prevState => {
            const newFiles = [
                ...prevState,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
            ]
            return newFiles.slice(0, 9)
        })
        setfileErrors(rejectedFiles.length > 0 ? rejectedFiles[0].errors : [])
    }

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
                apikey: REACT_APP_GOOGLE_DRIVE_API_KEY,
                scope: REACT_APP_GOOGLE_DRIVE_SCOPES,
                plugin_name: "chat"
            })
        })
    }, [])

    const uploadFile = async file => {
        const getToken = gapi.auth.getToken()

        if (getToken === null) throw new Error('No existe token')

        const accessToken = gapi.auth.getToken().access_token
        const response = await axios.post(REACT_APP_GOOGLE_DRIVE_API_URL, file, {
            headers: {
                'Authorization': `Bearer ${accessToken}`, 'Content-Type': `${file.type}`,
                'Content-Length': `${file.size}`, 'name': `${file.name}`
            }
        })
        return response
    }

    const uploadFiles = async () => {
        Promise.allSettled(files.map(file => uploadFile(file)))
            .then((results) => onUploadFiles(results))
    }

    const deleteFiles = () => setFiles([])

    return (
        <div className='dropzone'>
            <div className='dropzone-field'>
                <DropzoneField onDrop={onDrop} files={files} fileErrors={fileErrors} />
                <div className='buttons'>
                    <button onClick={deleteFiles}>Eliminar archivos</button>
                    <button onClick={uploadFiles}>Subir archivos</button>
                </div>
            </div>
            <LoginWithGoogle />
        </div>
    )
}

export default Dropzone

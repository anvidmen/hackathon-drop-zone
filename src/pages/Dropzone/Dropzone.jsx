import { useState } from 'react'
import DropzoneField from 'components/DropzoneField/DropzoneField'
import './styles.sass'

const Dropzone = () => {
    const [files, setFiles] = useState([])
    const [fileErrors, setfileErrors] = useState([])

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

    const deleteFiles = () => setFiles([])

    const uploadFiles = () => { }

    return (
        <div className='dropzone'>
            <div className='dropzone-field'>
                <DropzoneField onDrop={onDrop} files={files} fileErrors={fileErrors} />
                <div className='buttons'>
                    <button onClick={deleteFiles}>Eliminar archivos</button>
                    <button onClick={uploadFiles}>Subir archivos</button>
                </div>
            </div>
        </div>
    )
}

export default Dropzone

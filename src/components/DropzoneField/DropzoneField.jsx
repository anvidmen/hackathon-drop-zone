import { useDropzone } from 'react-dropzone'
import Placeholder from 'components/Placeholder/Placeholder'
import FilePreview from 'components/FilePreview/FilePreview'
import './styles.sass'

const DropzoneField = ({files, fileErrors, onDrop}) => {
    const { getRootProps, getInputProps, isDragAccept, isFocused, isDragReject } = useDropzone({
        onDrop: onDrop,
        noClick: false,
        noKeyboard: true,
    })
 
    return (
        <div
            className='container-field'
            {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
            <input {...getInputProps()} />
            {files?.length ? files.map( file => <FilePreview file={file} /> ):
                <Placeholder />
            }
        </div>
    )
}

export default DropzoneField

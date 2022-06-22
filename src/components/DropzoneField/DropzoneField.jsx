import { useDropzone } from "react-dropzone";
import Placeholder from "components/Placeholder/Placeholder";
import FilesPreview from "components/FilesPreview/FilesPreview";
import './styles.sass'

const DropzoneField = (props) => {
    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isFocused,
        isDragReject,
    } = useDropzone({
      
        onDrop: props.onDrop,
        noClick: false,
        noKeyboard: true,
    });
 
    return (

        <div
            className=" container-field"
            {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
            <input {...getInputProps()} />
            {props.files && props.files.length > 0 ?
                <FilesPreview files={props.files} /> :
                <Placeholder />
            }

        </div>
    );
}

export default DropzoneField

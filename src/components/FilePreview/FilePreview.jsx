import './styles.sass'

const FilePreview = ({ file }) => (
    <div key={file?.path} className='container'>
        <img
            className='image-container'
            src={`${file.type.includes('application') ? 'https://upload.wikimedia.org/wikipedia/commons/0/0c/File_alt_font_awesome.svg' : file?.preview}`}
            alt={`${file.type} - ${file.preview}`}
        />
        <h2 className='details'>
            {`${file?.name.substring(0, 12)}`} - {(file?.size / 1024000).toFixed(2)}MB
        </h2>
    </div>
)

export default FilePreview

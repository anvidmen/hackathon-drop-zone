import './styles.sass'

const FilesPreview = ({ file }) => (
    file?.map(( {preview, name, path, size, type }) => (
        <div key={path} className='container'>
            <img className='image-container' src={`${type.includes('application') ? 'https://upload.wikimedia.org/wikipedia/commons/0/0c/File_alt_font_awesome.svg': preview }`} alt='images prewiew' />
            <h2 className='details'>
                {`${name.substring(0, 12)}`} - {(size / 1024000).toFixed(2)}MB
            </h2>
        </div>
    ))

)
export default FilesPreview

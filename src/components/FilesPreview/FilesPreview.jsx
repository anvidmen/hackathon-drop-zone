import './styles.sass'

const FilesPreview = ({ files }) => (
    files?.map(({ preview, name, path, size, type }) => (
        <div key={path} className='container'>
        {console.log(files)}
            <img className='image-container' src={`${type.includes("application") ? 'https://upload.wikimedia.org/wikipedia/commons/0/0c/File_alt_font_awesome.svg': preview }`} alt='images prewiew' />
            <h2 className='details'>
                {`${name.substring(0, 14)}`} - {(size / 1024000).toFixed(2)}MB
            </h2>
        </div>
    ))

)
export default FilesPreview

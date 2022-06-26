import { MdCloudUpload } from 'react-icons/md'
import './styles.sass'

const Placeholder = () => (
  <div className='placeholder-preview'>
    <MdCloudUpload className='icon' />
    <p>ARASTRA TUS ARCHIVOS AQUÍ</p>
    <small>Sólo se permite un máximo de 9 archivos</small>
  </div>
)

export default Placeholder

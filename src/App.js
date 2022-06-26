import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DropZone from "pages/Dropzone/Dropzone"
import Register from "pages/Register/Register"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Register />} />
        <Route path='/dropzone' caseSensitive={false} element={<DropZone />} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import retrieveUser from 'logic/retrieve-user'
import DropZone from "pages/Dropzone/Dropzone"
import Register from "pages/Register/Register"
import Login from 'pages/Login/Login'

const App = () => {

  const user = retrieveUser()

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to='/login' replace />
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path='/' caseSensitive={false} element={
          <ProtectedRoute user={user}>
            <DropZone />
          </ProtectedRoute>
        }
        />
        <Route path='/login' caseSensitive={false} element={<Login />} />
        <Route path='/register' caseSensitive={false} element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App

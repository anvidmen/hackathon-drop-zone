import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AppContext } from 'providers/AppProvider'
import retrieveUser from 'logic/retrieve-user'
import DropZone from "pages/Dropzone/Dropzone"
import Register from "pages/Register/Register"
import Login from 'pages/Login/Login'

const App = () => {
  const [user, setUser] = useContext(AppContext)

  useEffect(() => {
    setUser(retrieveUser())
  }, [setUser])

  const ProtectedRoute = ({ loggedUser, children }) => {
    if (!loggedUser) {
      return <Navigate to='/login' replace />
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/' caseSensitive={false} element={
          <ProtectedRoute loggedUser={user}>
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

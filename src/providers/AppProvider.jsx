import { createContext, useState } from 'react'

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  
  return (
    <AppContext.Provider value={[user, setUser]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export const AppContext = createContext()
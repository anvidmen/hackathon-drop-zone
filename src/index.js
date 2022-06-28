import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from 'providers/AppProvider'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)

reportWebVitals()

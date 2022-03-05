import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { AppProvider } from './context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

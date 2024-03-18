import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AstroState from './components/astro app/AstroState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AstroState>
    <App />
  </AstroState>,
)

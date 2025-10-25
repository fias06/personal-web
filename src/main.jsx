import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // <--- This line must match your component filename
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <--- The component name here must match the import */}
  </React.StrictMode>,
)

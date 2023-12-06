import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'  *retirar*
import Calculadora from './main/calculadora' // *adicionar*
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <h1>Calculadora</h1>
      <Calculadora />
    </>
  </React.StrictMode>,
)

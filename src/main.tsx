import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import ColorsContextProvider from './Contexts/ColorsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorsContextProvider>
  </React.StrictMode>
)

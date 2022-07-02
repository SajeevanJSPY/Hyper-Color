import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import ColorsContextProvider from './Contexts/ColorsContext'
import NavbarContextProvider from './Contexts/NavbarContext'
import gradients from "./assests/GradientsAssest.json"

if(!localStorage.getItem('gradients')) {
  localStorage.setItem('gradients', JSON.stringify(gradients.gradients))
}
if(!localStorage.getItem('gradientsFavourite')) {
  localStorage.setItem('gradientsFavourite', JSON.stringify([]))
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorsContextProvider>
      <NavbarContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavbarContextProvider>
    </ColorsContextProvider>
  </React.StrictMode>
)

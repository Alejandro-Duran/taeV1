import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Paths from './components/Paths'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
  </>
)

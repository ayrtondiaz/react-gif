import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  {/* sirve para que react ayude a encontrar problemas o codigo biejo */}
    <GifExpertApp/>
  </React.StrictMode>
)

import 'leaflet/dist/leaflet.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
// Use a relative import so the module system works correctly when
// this file is used outside of a Node.js environment with absolute
// path resolution.
import App from './App.jsx'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

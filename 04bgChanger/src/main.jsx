import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import SmartBulb from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmartBulb />
  </StrictMode>,
)

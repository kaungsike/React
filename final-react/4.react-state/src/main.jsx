import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShowMyName from './ShowMyName.jsx'
import Faq from './Faq.jsx'
import FaqSection from './FaqSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FaqSection/>
  </StrictMode>,
)

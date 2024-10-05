import { StrictMode } from 'React'
import { createRoot } from 'React-dom/client'
import './index.css'
import Formulario  from './Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario/>
  </StrictMode>,
)

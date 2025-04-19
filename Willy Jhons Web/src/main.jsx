import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainScreen } from '../src/screen/MainScreen'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainScreen/>
  </StrictMode>
)
 
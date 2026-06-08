import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import Context from './Context.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Context.Provider value="Helloo">
    <App />
    </Context.Provider>
    </BrowserRouter>
  </StrictMode>
      
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx' 
// import Context from './Context.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Context.Provider value="hello">
      
//     <App />
//     </Context.Provider>
//   </StrictMode>
// )

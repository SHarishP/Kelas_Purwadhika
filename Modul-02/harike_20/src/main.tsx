import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* 
  Strict digunkaan untuk debugging

  knp yg di main .tsx harus diganti ke BroserRouter ?
  import { BrowserRouter } from 'react-router-dom' digunakan supaya bisa Browser Router Dom
*/
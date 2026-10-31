import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyRouteMeta } from './lib/seo.ts'

applyRouteMeta(window.location.pathname.replace(/\/+$/, "") || "/")

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

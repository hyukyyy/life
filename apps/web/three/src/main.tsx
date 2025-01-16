import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './home/index.tsx'
import Results from './results/index.tsx'
import { Events } from './events/index.tsx'
import FAQ from './faq/index.tsx'
import { Contact } from './contact/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/results",
    element: <Results />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './Provider/ThemeProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)

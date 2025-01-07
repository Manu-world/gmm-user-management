import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Dashboard from './components/AdminDashboard.tsx'
// import UserDashboard from './components/UserDashboard.tsx'
// import PasswordReset from './components/ResetPassword.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PasswordReset /> */}
    {/* <UserDashboard /> */}
    <Dashboard />
  </StrictMode>,
)

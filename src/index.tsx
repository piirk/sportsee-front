import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <Router
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Header />
    <Routes>
      {/* Redirect to one user --dev */}
      <Route path="/" element={<Navigate to="/18" replace />} />
      <Route path=":userId" element={<Dashboard />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  </Router>,
)

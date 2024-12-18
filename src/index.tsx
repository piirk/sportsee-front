import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Error from './components/Error/Error'

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
      <Route path=":userId" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
)

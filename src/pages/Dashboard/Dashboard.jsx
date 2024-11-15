import React from 'react'
import './Dashboard.scss'
import NavDashboard from '../../components/NavDashboard/NavDashboard'

const Dashboard = () => {
  return (
    <div className="ss-dashboard">
      <div className="ss-dashboard__sidebar">
        <NavDashboard />
        <footer className="ss-dashboard__sidebar__footer">
          <span className="ss-dashboard__sidebar__footer__copyright">
            Copyright SportSee 2020
          </span>
        </footer>
      </div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard

import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonNavDashboard.scss'

const ButtonNavDashboard = ({ icon, link }) => {
  return (
    <Link to={link}>
      <button className="ss-button-nav-dashboard">
        <img src={icon} alt="icon" />
      </button>
    </Link>
  )
}

export default ButtonNavDashboard

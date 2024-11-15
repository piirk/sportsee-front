import React from 'react'
import './NavDashboard.scss'
import ButtonNavDashboard from '../ButtonNavDashboard/ButtonNavDashboard'

const NavDashboard = ({ buttonList }) => {
  return (
    <nav className="ss-nav-dashboard">
      {buttonList.map((button, index) => (
        <ButtonNavDashboard key={index} icon={button.icon} link={button.link} />
      ))}
    </nav>
  )
}

export default NavDashboard

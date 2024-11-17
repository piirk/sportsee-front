import React from 'react'
import PropTypes from 'prop-types'
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

NavDashboard.propTypes = {
  buttonList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default NavDashboard

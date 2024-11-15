import React from 'react'
import { Link } from 'react-router-dom'
import './NavDashboard.scss'
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'

const NavDashboard = () => {
  return (
    <nav className="ss-nav-dashboard">
      <Link to="/">
        <button className="ss-nav-dashboard__button">
          <img src={icon1} alt="icon1" />
        </button>
      </Link>
      <Link to="/">
        <button className="ss-nav-dashboard__button">
          <img src={icon2} alt="icon2" />
        </button>
      </Link>
      <Link to="/">
        <button className="ss-nav-dashboard__button">
          <img src={icon3} alt="icon3" />
        </button>
      </Link>
      <Link to="/">
        <button className="ss-nav-dashboard__button">
          <img src={icon4} alt="icon4" />
        </button>
      </Link>
    </nav>
  )
}

export default NavDashboard

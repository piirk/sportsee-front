import React from 'react'
import './NavDashboard.scss'
import ButtonNavDashboard from '../ButtonNavDashboard/ButtonNavDashboard'

import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'

const buttonList = [
  { icon: icon1, link: '/' },
  { icon: icon2, link: '/' },
  { icon: icon3, link: '/' },
  { icon: icon4, link: '/' },
]

const NavDashboard = () => {
  return (
    <nav className="ss-nav-dashboard">
      {buttonList.map((button, index) => (
        <ButtonNavDashboard key={index} icon={button.icon} link={button.link} />
      ))}
    </nav>
  )
}

export default NavDashboard

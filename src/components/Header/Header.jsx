import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="ss-header">
      <img src={logo} alt="Logo" className="ss-header__logo" />
      <nav className="ss-nav-top">
        <Link to="/" className="ss-nav-top__link">
          Accueil
        </Link>
        <Link to="/" className="ss-nav-top__link">
          Profil
        </Link>
        <Link to="/" className="ss-nav-top__link">
          Réglages
        </Link>
        <Link to="/" className="ss-nav-top__link">
          Communauté
        </Link>
      </nav>
    </header>
  )
}

export default Header

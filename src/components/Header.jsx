import React, { useState } from 'react'
import Nav from './Nav'
import Util from './Util'
import { headerData } from '../util/header'
import './styles/Header.scss'

const Header = () => {
  const headerLogo = headerData.logo;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="inner">
        <div 
          className={`btn-menu ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </div>

        <div className={`nav-wrap ${isMenuOpen ? 'open' : ''}`}>
          <Nav setIsMenuOpen={setIsMenuOpen} />
        </div>

        <h1 className='tit'>
          <a href={headerLogo.href}>
            <img src={headerLogo.src} alt={headerLogo.alt} />
          </a>
        </h1>
        <Util />
      </div>
    </header>
  )
}

export default Header
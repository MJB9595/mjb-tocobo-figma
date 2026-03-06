import React, { useState } from 'react'
import Nav from './Nav'
import Util from './Util'
import { headerData } from '../util/header'
import './styles/Header.scss'

const Header = () => {
  const headerLogo = headerData.logo;
  // 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="inner">
        {/* 햄버거 메뉴 버튼 */}
        <div 
          className={`btn-menu ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </div>

        {/* 메뉴 영역 (상태에 따라 open 클래스 추가) */}
        <div className={`nav-wrap ${isMenuOpen ? 'open' : ''}`}>
          {/* Nav 컴포넌트에 상태 변경 함수를 넘겨서 메뉴 클릭 시 창이 닫히도록 함 */}
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
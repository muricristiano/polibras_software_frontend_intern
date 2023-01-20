import React from 'react'
import LOGO from '../../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='header_container'>
        <img className="header__logo" src={LOGO} alt="" />
        <div>
            <h1>Polibras Software Intern's Test</h1>
            <h2>Murilo Ribeiro Cristiano</h2>
        </div>
      </div>
    </header>
  )
}

export default Header

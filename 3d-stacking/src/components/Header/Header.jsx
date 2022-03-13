import React from 'react'
import './header.css'
const Header = () => {
  return (
      <ul className='header'>
          <li>home</li>
          <li className="active hide-xs">work</li>
          <li className="hide-xs">travel</li>
          <li>menu</li>
      </ul>
  )
}

export default Header
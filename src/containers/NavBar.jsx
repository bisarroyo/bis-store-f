import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaBlog } from 'react-icons/fa'

export const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            <FaBlog />
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/blog'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            {click ? <IoIosCloseCircleOutline /> : <BiMenuAltRight />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar

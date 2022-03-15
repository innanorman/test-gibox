import React from 'react'
import icon from '../../gibox_digital.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={icon} alt="icon" className='navbar-logo'/>
      <div className='list-menu'>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
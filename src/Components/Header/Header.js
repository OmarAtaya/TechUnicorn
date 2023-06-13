import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header__container'>
      <nav>
        <ul>
          
        </ul>
      </nav>
      <form id="form" role="search">
        <input 
          type="text" id="query" name="q"
          placeholder="Search what you need"
          aria-label="Search through site content" 
        />
      </form>
    </div>
  )
}

export default Header
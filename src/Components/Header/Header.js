import React from 'react';
import './Header.css';
import Bell from '../../assets/Bell.png';
import User from '../../assets/User.png';
import Heart from '../../assets/Heart.png';
import Cart from '../../assets/Cart.png';
import Search from '../../assets/Search.png';

function Header() {
  return (
    <div className='header__container'>

      <nav>
        <ul>
          <li>Shop</li>
          <li>Promo</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </nav>

      <div className='header__search'>
        <form role="search">
          <input 
            type="text" id="query" name="q"
            placeholder="Search what you need"
            aria-label="Search through site content" 
          />
          <img src={Search} alt='' width={"24px"} height={"24px"}/>
        </form>
      </div>

      <div className='header__menu'>
        <img src={Heart} alt='' width={"32px"} height={"32px"}/>
        <div className='cart'>
          <img src={Cart} alt='' width={"32px"} height={"32px"}/>
          <div className='cart__num'>3</div>
        </div>
        <img src={User} alt='' width={"32px"} height={"32px"}/>
        <img src={Bell} alt='' width={"32px"} height={"32px"}/>
      </div>

    </div>
  )
}

export default Header
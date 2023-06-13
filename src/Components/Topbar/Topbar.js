import React from 'react';
import './Topbar.css';
import Phone from '../../assets/Phone.png';
import Delivery from '../../assets/Delivery.png';

function Topbar() {
  return (
    <div className='topbar__container'>
      <h3 className='topbar__logo'>Dealerz.</h3>
      <div className='topbar__items'>
        <div className='topbar__item'>
          <img src={Phone} alt='' width={"24px"} height={"24px"}/>
          <h3 className='icon__text'>Call Center</h3>
        </div>
        <div className='topbar__item'>
          <img src={Delivery} alt='' width={"24px"} height={"24px"}/>
          <h3 className='icon__text'>Shipping & Returns</h3>
        </div>
      </div>
    </div>
  )
}

export default Topbar
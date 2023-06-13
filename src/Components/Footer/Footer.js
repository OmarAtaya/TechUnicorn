import React from 'react';
import './Footer.css';
import Rectangle from '../../assets/Rectangle.png';
import YT from '../../assets/YT.png';
import FB from '../../assets/FB.png';
import TW from '../../assets/TW.png';
import IG from '../../assets/IG.png';

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__content'>
        <img src={Rectangle} alt='' width={"360px"} height={"360px"}/>

        <div className='footer__menu'>
          <div className='footer__items'>
            <h3 className='footer__logo'>Dealerz.</h3>
            <h6 className='footer__item'>
              Privacy Policy
            </h6>
            <h6 className='footer__item'>
              Terms and Condition
            </h6>
          </div>
          <h6 className='footer__item'>
            @2020 TanahAir Studio. All rights reserved.
          </h6>
        </div>
      </div>
      <div className='footer__media'>
        <img src={YT} alt='' width={"40px"} height={"40px"}/>
        <img src={FB} alt='' width={"40px"} height={"40px"}/>
        <img src={TW} alt='' width={"40px"} height={"40px"}/>
        <img src={IG} alt='' width={"40px"} height={"40px"}/>
      </div>
    </div>
  )
}

export default Footer
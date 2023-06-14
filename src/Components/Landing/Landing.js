import React from 'react';
import './Landing.css';
import Land from '../../assets/Landing.png';

function Landing() {
  return (
    <div className='landing'> {/* Landing Section */}
        <img src={Land} alt='' width={"100%"}/>
        <div className='landing__content'>
          <h1 id='landing__title'>
          Your Premium <br/>Sound, Unplugged!
          </h1>
          <h5 id='landing__subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
          <button className='landing__button'>
          Find out More
          </button>
        </div>
    </div>
  )
}

export default Landing
import React from 'react';
import './Newsletter.css';
import Join from '../../assets/join.png';

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className='newsletter__content'>
            <h2 className='newsletter__title'>
            Join Our News Letters
            </h2>
            <p className='newsletter__info'>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.<br/> Iterative approaches to corporate strategy foster 
            </p>
            <form id="form">
            <input 
                type="text" id="query" name="q"
                placeholder="Insert your mail here"
                aria-label="Join Our News letter" 
            />
            <img src={Join} alt='' width={"48px"} height={"48px"}/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
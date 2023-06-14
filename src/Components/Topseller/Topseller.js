import React from 'react';
import './Topseller.css';

function Topseller({products}) {
  return (
    <div className='carousel'>
        <h2 className='carousel__title'>Top Items</h2>
        <h4 className='carousel__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h4>
        <div className="items__container">
            {products.map((item) => {
                return (
                    <div className="single-item__container">
                    <div className='item__container'>
                        <button className='tag__button'>
                        SALE
                        </button>
                        <div className='item__info'>
                        <h3 id='item__title'>{item.title}</h3>
                        <h5 id='item__category'>{item.category}</h5>
                        <h5 id='item__price'>${item.price}</h5>
                        </div>
                    </div>
                    </div>
                );
                })}
        </div>
    </div>
  )
}

export default Topseller
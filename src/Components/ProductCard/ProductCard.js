import React from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';
import Button from '../../assets/Button.png'

function ProductCard({product}) {
  return (
        <div className='product__card'>
            <h5 className='card__category'>{product.category}</h5>
            <h2 className='card__title'>{product.title}</h2>
            <Link to={`/product/${product.slug}`} style={{textDecoration: 'none'}} state={product}>
                <img src={Button} alt='' width={'40px'} height={'40px'}/>    
            </Link>
        </div>
     )
}

export default ProductCard
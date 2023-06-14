import React, {useState, useEffect} from 'react';
import './Shop.css';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Search from '../../assets/Search.png';
import Filters from '../../assets/Filters.png';
import Filter from '../../assets/Filter.png';
import Arrow from '../../assets/Arrow.png';
import Rectangle from '../../assets/Rectangle.png';

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      //fetching 6 products
      fetch('https://fakestoreapi.com/products?limit=4')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <div className='shop__container'>
        <div className='filter__container'>
          <form id='form1' role="search">
            <input 
              type="text" id="query" name="q"
              placeholder="Search products"
              aria-label="Search through products" 
            />
            <img src={Search} alt='' width={"24px"} height={"24px"}/>
          </form>
          <div className='filter__section'>
            <div className='section__space'>
              <h4 className='filter__title'>Price</h4>
              <img src={Filter} alt=''/>
            </div>
            <img src={Filters} alt=''/>
            <div className='section__space'>
              <h4 className='price__range'>Range</h4>
              <h4 className='price__range'>$5-$20</h4>
            </div>
          </div>
          <div className='filter__section'>
            <h5 className='filter__title'>Product Categories</h5>
            <ul className='categories__list'>
              <li className='section__space remove'>
                <h4>Coat and Jackets</h4>
                <img src={Arrow} alt=''/>
              </li>
              <li className='section__space remove'>
                <h4>Dresses</h4>
                <img src={Arrow} alt=''/>
              </li>
              <li className='section__space remove'>
                <h4>Playsuit</h4>
                <img src={Arrow} alt=''/>
              </li>
              <li className='section__space remove'>
                <h4>Short</h4>
                <img src={Arrow} alt=''/>
              </li>
              <li className='section__space remove'>
                <h4>Top</h4>
                <img src={Arrow} alt=''/>
              </li>
              <li className='section__space remove'>
                <h4>Bottoms</h4>
                <img src={Arrow} alt=''/>
              </li>
            </ul>
          </div>
          <div className='filter__section'>
            <h5 className='filter__title'>
              Featured Products
            </h5>
            {products && products.map((product) => {
            return(
              <div className='featured'>
                <img src={Rectangle} alt='' width={"80px"} height={"80px"}/>
                <div className='featured__info'>
                  <h4 className='featured__title'>{product.title}</h4>
                  <h5 className='featured__price'>${product.price}</h5>
                </div>
              </div>
            )  
          })}
          </div>
        </div>
        <div className='product__list'>
          <button>See More</button>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Shop
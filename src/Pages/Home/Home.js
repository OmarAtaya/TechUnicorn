import React, {useState, useEffect} from 'react';
import './Home.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Rectangle from '../../assets/Rectangle.png';
import Company1 from '../../assets/logo 1.png';
import Company2 from '../../assets/logo 2.png';
import Company3 from '../../assets/logo 3.png';
import Company4 from '../../assets/logo 4.png';
import Company5 from '../../assets/logo 5.png';
import Company6 from '../../assets/logo 6.png';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Topseller from '../../Components/Topseller/Topseller';
import Reviews from '../../Components/Reviews/Reviews';
import Landing from '../../Components/Landing/Landing';


function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      //fetching 6 products
      fetch('https://fakestoreapi.com/products?limit=6')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }
    fetchProducts()
  }, [])
  return (
    <div className='home__container'>
      <Landing/> {/*Landing Section*/}
      <div className='home__collection'> {/* Collection Section */}
        <h2 className='collection__title'>Our Premium Collection</h2>
        <div className='collection__bar'>
          <button className='bar__optionon' >All Products</button>
          <button className='bar__option'>Coats & Jackets</button>
          <button className='bar__option'>Dressed</button>
          <button className='bar__option'>Playsuit</button>
          <button className='bar__option'>Short</button>
          <button className='bar__option'>Skirt</button>
          <button className='bar__option'>T-Shirt</button>
        </div>
        <div className='collection__products'>
          {products && products.map((product) => {
            return(
              <ProductCard product={product}/>
            )  
          })}
        </div>

        <button className='landing__button'>
          Find out More
        </button>
      </div>
      <Topseller products={products}/> {/* Top Seller Section */}
      <div className='home__story'> {/* Our Story Section */}
        <img src={Rectangle} alt='' className='story__image'/>
        <div className='story__content'>
          <h2 className='story__title'>Story about<br/>Our Brand</h2>
          <p className='story__body'>Develop a website by finding a product identity that has value and<br/> branding to become a characteristic of a company. We will also<br/> facilitate the business marketing of these products with our SEO<br/> experts so that they become a ready-to-use website and help sell<br/> a product from the company Develop a website by finding a<br/> product identity that has value and branding to become a<br/> characteristic of a company. We will also facilitate the business<br/> marketing of these products with our SEO experts so that they<br/> become a ready-to-use website and help sell a product from the<br/> company</p>
          <button className='story__button'>Read full story</button>
        </div>
      </div>
      <div className='home__achievement'> {/* Achievements Section */}
        <h2 className='achievement__title'>Our Achievement</h2>
        <div className='achievement__list'>
          <img src={Company2} alt='' className='achievement__image' />
          <img src={Company1} alt='' className='achievement__image' />
          <img src={Company3} alt='' className='achievement__image' />
          <img src={Company4} alt='' className='achievement__image' />
          <img src={Company5} alt='' className='achievement__image' />
          <img src={Company6} alt='' className='achievement__image' />
        </div>
      </div>
      <Reviews/> {/* Reviews Section */}
      <div className='home__article'> {/* Articles Section */}
        <div className='article__header'>
            <h2 className='article__title'>
              Get Better Insights<br/>from Our Articles
            </h2>
            <button className='article__button'>
              see more
            </button>
        </div>
        <div className='posts'>
          <div className='article__post'>
            <img src={Rectangle} alt='' className='article__image'/>
            <h3 className='post__title'>Best Summer Outfit Style</h3>
            <div className='post__info'>
              <h5>14 Feb</h5>
              <p>.</p>
              <h5>Livina Style</h5>
            </div>
            <p className='post__description'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className='post__button'>
              Explore More
            </button>
          </div>
          <div className='article__post'>
          <img src={Rectangle} alt='' className='article__image'/>
            <h3 className='post__title'>Best Summer Outfit Style</h3>
            <div className='post__info'>
              <h5>14 Feb</h5>
              <p>.</p>
              <h5>Livina Style</h5>
            </div>
            <p className='post__description'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className='post__button'>
              Explore More
            </button>
          </div>
          <div className='article__post'>
          <img src={Rectangle} alt='' className='article__image'/>
            <h3 className='post__title'>Best Summer Outfit Style</h3>
            <div className='post__info'>
              <h5>14 Feb</h5>
              <p>.</p>
              <h5>Livina Style</h5>
            </div>
            <p className='post__description'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className='post__button'>
              Explore More
            </button>
          </div>
          <div className='article__post'>
          <img src={Rectangle} alt='' className='article__image'/>
            <h3 className='post__title'>Best Summer Outfit Style</h3>
            <div className='post__info'>
              <h5>14 Feb</h5>
              <p>.</p>
              <h5>Livina Style</h5>
            </div>
            <p className='post__description'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className='post__button'>
              Explore More
            </button>
          </div>
        </div>
      </div>
      <Newsletter/> {/* Newsletter Section */}
    </div>
  )
}

export default Home
import React, {useState} from 'react';
import './Header.css';
import Bell from '../../assets/Bell.png';
import User from '../../assets/User.png';
import Heart from '../../assets/Heart.png';
import Cart from '../../assets/Cart.png';
import Search from '../../assets/Search.png';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from "framer-motion";
import {AiOutlineMenu} from 'react-icons/ai';
import {MdOutlineCancel} from 'react-icons/md';


function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(prevCheck => !prevCheck);
  }
  return (
    <div className='header__container'>
      <nav className='navigation'>
        <ul>
          <li className='navbar__item'><Link to="/shop" style={{textDecoration: 'none', color: 'black'}}>Shop</Link></li>
          <li className='navbar__item'>Promo</li>
          <li className='navbar__item'>About</li>
          <li className='navbar__item'>Blog</li>
        </ul>
      </nav>
      <div className='nav__phone'>
        <AiOutlineMenu className='Home__Menu' onClick={handleClick}/>
        <AnimatePresence>
        {
            menu &&(
            <motion.div className="menu_container"
                initial={{height:0,opacity:0}}
                animate={{height:"100vh", opacity:1}}
                transition={{duration:.5}}
                exit="exit"
            >
                <MdOutlineCancel onClick={handleClick} style={{color: "black", width: "30px", height: "30px", margin: "15px 0px"}}/>
                <motion.a href="/shop"
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.8}}
                exit={{
                    opacity:0,
                    y:90,
                    transition:{
                        ease:"easeInOut",
                        delay:0.25
                    }
                }}
                className='menu_item'
                >Shop</motion.a>
                <motion.a href="/"
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.7}}
                exit={{
                    opacity:0,
                    y:90,
                    transition:{
                        ease:"easeInOut",
                        delay:0.25
                    }
                }}
                className='menu_item'
                >Promo</motion.a>
                <motion.a href="/"
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.6}}
                exit={{
                    opacity:0,
                    y:90,
                    transition:{
                        ease:"easeInOut",
                        delay:0.25
                    }
                }}
                className='menu_item'
                >About</motion.a>
                <motion.a href="/"
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.5}}
                exit={{
                    opacity:0,
                    y:90,
                    transition:{
                        ease:"easeInOut",
                        delay:0.25
                    }
                }}
                className='menu_item'
                >Blog</motion.a>
            </motion.div>
            )
        }    
        </AnimatePresence>
      </div>
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
        <img src={Heart} alt='' className='header__icon'/>
        <div className='cart'>
          <img src={Cart} alt='' className='header__icon'/>
          <div className='cart__num'>3</div>
        </div>
        <img src={User} alt='' className='header__icon'/>
        <img src={Bell} alt='' className='header__icon'/>
      </div>

    </div>
  )
}

export default Header
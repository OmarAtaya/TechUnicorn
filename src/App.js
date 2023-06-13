import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Gallery from './Pages/Gallery/Gallery';
import Topbar from './Components/Topbar/Topbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path='/product/:slug' element={<Product/>}/>
          <Route exact path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
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
          <Route exact path='/shop' element={<Shop/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

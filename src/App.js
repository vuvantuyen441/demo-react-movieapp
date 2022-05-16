import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'

import Home from '../src/pages/Home'
import Catalog from '../src/pages/Catalog'
import Detial from '../src/pages/detail/Detail'

function App() {
  return (
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:category/search/:keyword' element={<Catalog />}/>
            <Route path='/:category' element={<Catalog />}/>
            <Route path='/:category/:id'  element={<Detial />}/>
          </Routes>
        <Footer />
      </Router>

  );
}

export default App;

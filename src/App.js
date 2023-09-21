import {useState} from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';
import Create from './components/create/Create';
import Checkout from './components/checkout/Checkout';
import FoodCatalog from './components/foodCatalog/FoodCatalog';
import FoodDetails from './components/foodDetails/FoodDetails';
import Foods from './components/foods/Foods';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import NewsLetter from './components/newsletter/NewsLetter';
import Cart from './components/cart/Cart';
 


import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/orders/new' element={ <NewOrderPage /> }/>
        <Route path='/orders' element={ <OrderHistoryPage /> }/>
        <Route path='/*' element={<Navigate to='/orders/new' />} />
        <Route path='/create' element={<Create />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/foodCatalog' element={<FoodCatalog />}/>
        <Route path='/foodDetails' element={<FoodDetails />}/>
        <Route path='/foods' element={<Foods />}/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/hero' element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;

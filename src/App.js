import {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';
import UpdateUserPage from './pages/UpdateUserPage';

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
        <Route path='/orders/new' element={ <NewOrderPage user={user } setUser={setUser}/> }/>
        <Route path='/orders' element={ <OrderHistoryPage user={user} setUser={setUser}/> }/>
        <Route path='/user/update' element={ <UpdateUserPage user={user} /> }/>
        <Route path='/*' element={ <Navigate to='/orders/new'/> }/>
        
        {/* //<Route path='/update' */}
        
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
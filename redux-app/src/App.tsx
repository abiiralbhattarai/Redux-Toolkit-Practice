import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Cart from './pages/Cart';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/cart" element={<Cart />}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

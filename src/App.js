import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

/* COMPONENTS */
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

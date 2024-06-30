
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Firstpageabout from './pages/home/firstpageabout';
import Ourmenu from './pages/home/ourmenu';
import Shop from './pages/home/shop';
import Wishlist from './pages/home/wishlist';
import Contact from './pages/home/contact';
import Home from './pages/home/home';
import Addcart from './pages/home/addcart';
import { RoundpointProvider } from './pages/home/createcontext';
import Addtocart1 from './pages/home/Addtocart1';
import Forgottonpassword from './pages/home/forgottonpassword';
import { CartProvider } from './pages/home/createcontext';
import { WishlistProvider } from './pages/home/createcontext';
function App() {
  return (
    <BrowserRouter>
      <RoundpointProvider>
        <CartProvider>
          <WishlistProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<Firstpageabout />} />
              <Route path="/menu" element={<Ourmenu />} />
              <Route path="/shop" element={<Shop />} />



              <Route path="/wishlist" element={<Wishlist />} />


              <Route path="/contact" element={<Contact />} />
              <Route path="/addtocart" element={<Addtocart1 />} />
              <Route path="/addtocart:id" element={<Addtocart1 />} />
              <Route path="/addcart" element={<Addcart />} />


              <Route path="/forgottonpassword" element={<Forgottonpassword />} />

            </Routes> </WishlistProvider>
        </CartProvider>

      </RoundpointProvider>
    </BrowserRouter>
  );
}


export default App;

import React, { createContext, useContext, useState } from 'react';

const RoundpointContext = createContext();

export const useRoundpoint = () => useContext(RoundpointContext);

export const RoundpointProvider = ({ children }) => {
  const [roundpointCount, setRoundpointCount] = useState(0);
  
  const incrementRoundpoint = () => {
    setRoundpointCount(prevCount => prevCount + 1);
  };
  const decrementRoundpoint = () => {
    setRoundpointCount(prevCount => Math.max(0, prevCount - 1)); // Ensure roundpointCount never goes below 0
  };
  

  return (
    <RoundpointContext.Provider value={{ roundpointCount, incrementRoundpoint, decrementRoundpoint}}>
      {children}
    </RoundpointContext.Provider>
  );
};
 
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
};
  return (
    <CartContext.Provider value={{ cartItems,setCartItems, addItemToCart ,removeItemFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [heartStatus, setHeartStatus] = useState({}); // Track heart status for each item

  const addItemToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
    setHeartStatus({ ...heartStatus, [item.id]: true });
  };

  const removeItemFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(updatedWishlist);
    setHeartStatus({ ...heartStatus, [itemId]: false });
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, heartStatus, addItemToWishlist, removeItemFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
export default createContext;
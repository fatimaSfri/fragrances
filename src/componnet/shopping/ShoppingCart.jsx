import HeaderForShopping from './HeaderForShopping'
import '../../index.css'
import React, { useState } from 'react';
import CustomScroll from '../customScroll/CustomScroll'
import CustomCursor from '../cursor/CustomCursor';
import Cart from './Cart';

export default function ShoppingCart() {

  const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = (scrollTop) => {
      setIsScrolled(scrollTop > 250); 
    };

  return (
   <>
    <CustomCursor />
    <CustomScroll onScroll={handleScroll}>
    <HeaderForShopping isScrolled={isScrolled} />
    <Cart></Cart>
    </CustomScroll>
    
    </>
  )
}

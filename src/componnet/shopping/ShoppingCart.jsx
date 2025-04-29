import HeaderForShopping from './HeaderForShopping'
import '../../index.css'
import React, { useState } from 'react';
import CustomScroll from '../customScroll/CustomScroll'
import CustomCursor from '../cursor/CustomCursor';
import Cart from './Cart';
import Description from './Description';
import Slider from './Slider';
import FooterShop from './FooterShop';

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
    <Description></Description>
    <hr className="border-t-2 border-[#adbcb5] mt-6" />
    <Slider></Slider>
    <FooterShop></FooterShop>
    </CustomScroll>
    
    </>
  )
}

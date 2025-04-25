
import Banner from "./componnet/banner/Banner"
import Questions from "./componnet/questions/Questions"
import Forest from "./componnet/forest/Forest"
import Product from "./componnet/product/Product"
import CustomScroll from './componnet/customScroll/CustomScroll'
import CustomCursor from './componnet/cursor/CustomCursor';
import React, { useState } from 'react';
import Header from "./componnet/header/Header"

export default function Home() {
const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (scrollTop) => {
    setIsScrolled(scrollTop > 250); 
  };
  return (
    <>
    <CustomCursor />
    <Header isScrolled={isScrolled} />
    <CustomScroll onScroll={handleScroll}>
    <div>

    <Banner></Banner>
     <Questions></Questions>
     <Forest></Forest>
     <Product></Product>
     
    </div>
    </CustomScroll>
    </>
  )
}

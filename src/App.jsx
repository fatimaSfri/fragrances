
import CustomScroll from './componnet/customScroll/CustomScroll'
import CustomCursor from './componnet/cursor/CustomCursor';
import Home from '../src/Home.jsx'
import React, { useState } from 'react';
import Header from "./componnet/header/Header"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (scrollTop) => {
    setIsScrolled(scrollTop > 250); 
  };
  return (
    <>
    <CustomCursor />
    <Header isScrolled={isScrolled} />
    <CustomScroll onScroll={handleScroll}>
     <Home></Home>
    </CustomScroll>
    </>
  )
}

export default App

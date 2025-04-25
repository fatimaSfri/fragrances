import Home from '../src/Home.jsx'
import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './componnet/shopping/ShoppingCart.jsx';

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
   
    </>
  )
}

export default App

import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Home from './pages/home/index'
import Cart from './pages/cart/index'
import { CartProvider } from './context/cart-context'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App

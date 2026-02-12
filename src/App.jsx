import { Routes,Route, Router } from 'react-router-dom'
import './App.css'
import Home from './pages/home/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    
  )
}

export default App

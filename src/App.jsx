import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Transfer from './Pages/Transfer'
import Deposite from './Pages/Deposite'
import Failed from './Pages/Failed'
import Home from './Pages/Home'
import History from './Pages/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='transfer' element={<Transfer />} />
      <Route path='deposite' element={<Deposite />} />
      <Route path='history' element={<History />} />
      <Route path='failed' element={<Failed />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App

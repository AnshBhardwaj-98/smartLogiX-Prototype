import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import DriverForm from './Pages/DriverForm'
import Shipper from './Pages/Shipper';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/driver' element={<DriverForm/>}></Route>
        <Route path='/shipper' element={<Shipper/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Registration from './Components/registration'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

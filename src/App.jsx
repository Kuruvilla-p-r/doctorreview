import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AllDoc from './Components/AllDoc'
import { Route, Routes } from 'react-router-dom'
import Doddetails from './Components/Doddetails'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<AllDoc/>}/>
      <Route path='/view/:id' element={<Doddetails/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App

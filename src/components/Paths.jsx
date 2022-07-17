import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

const Paths = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default Paths
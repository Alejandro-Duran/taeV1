import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import App from './App'

const Paths = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<App />} />
    </Routes>
    </>
  )
}

export default Paths
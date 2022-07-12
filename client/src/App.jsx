import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Appointment from './Components/Appointment/Appointment'
import Login from './Components/Authentication/Login'
import RequiredAuth from './Components/Authentication/RequiredAuth'
import SignUp from './Components/Authentication/SignUp'
import Home from './Components/Home/Home'
import Loader from './Components/Shared/Loader/Loader'
import Navbar from './Components/Shared/Navbar/Navbar'

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {
          loading ? (
            <Loader />
          ) :
            <Navbar />
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={
            <RequiredAuth>
              <Appointment />
            </RequiredAuth>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

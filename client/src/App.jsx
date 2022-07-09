import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Appointment from './Components/Appointment/Appointment'
import Login from './Components/Authentication/Login'
import RequiredAuth from './Components/Authentication/RequiredAuth'
import SignUp from './Components/Authentication/SignUp'
import Home from './Components/Home/Home'
import Navbar from './Components/Shared/Navbar/Navbar'

export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
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
  )
}

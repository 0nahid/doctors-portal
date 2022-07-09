import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Appointment from './Components/Appointment/Appointment'
import Login from './Components/Authentication/Login'
import SignUp from './Components/Authentication/SignUp'
import Home from './Components/Home/Home'
import Navbar from './Components/Shared/Navbar/Navbar'

export default function App() {
  return (
    <div class="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />

    </div>
  )
}

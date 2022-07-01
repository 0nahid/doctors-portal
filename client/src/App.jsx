import { Route, Routes } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Home from './Components/Home/Home'
import Navbar from './Components/Shared/Navbar/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

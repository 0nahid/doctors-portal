import { Link } from "react-router-dom"

export default function Navbar() {
    const Navmenu = (
        <li>
            <Link to="/">Home</Link>
            <Link to="/appointment">Appointment</Link>
            <Link to="/review">Review</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </li>
    )
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Navmenu}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {Navmenu}
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Get started</a>
            </div>
        </div>
    )
}

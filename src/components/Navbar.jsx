import React from 'react'
import '../styles/Typography.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center bg-gray-900 px-3">
      <div className="navbar-brand">
        <Link to ="/" className="font-bold">MOVIE APP</Link>
      </div>

      <div className="navbar-links flex justify-between gap-3">
        <NavLink to ="/" className={({ isActive }) => isActive ? 'btn-main active' : 'btn-main'}>Home</NavLink>
        <NavLink to ="/favourites" className={({ isActive }) => isActive ? 'btn-main active' : 'btn-main'}>Favourites</NavLink>
      </div>
    </nav>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Typography.css'

export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-900 p-5">
      <nav className="grid grid-flow-col gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? 'link link-hover active' : 'link link-hover'}>Home</NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? 'link link-hover active' : 'link link-hover'}>Favourites</NavLink>
      </nav>

      <aside>
        <p>Copyright @ {new Date().getFullYear()} - All right reserved I think</p>
      </aside>
    </footer>
  )
}

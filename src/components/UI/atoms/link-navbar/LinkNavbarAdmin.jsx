import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function LinkNavbarAdmin() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <>
      <li>
        <NavLink
          className={
            splitLocation[1] === ''
              ? 'active'
              : 'inactive link link-underline link-underline-black text-black'
          }
          to='/'
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active'
              : 'inactive link link-underline link-underline-black text-black'
          }
          to='/rekap-penjualan'
        >
          Rekap Penjualan
        </NavLink>
      </li>
    </>
  )
}

export default LinkNavbarAdmin

import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../logo/Logo'

function LinkNavbar() {
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
    </>
  )
}

export default LinkNavbar

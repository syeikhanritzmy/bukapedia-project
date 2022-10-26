import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'
import ButtonNavbar from '../../atoms/button/ButtonNavbar'
import Logo from '../../atoms/logo/Logo'
import CartIcon from '../../atoms/icon/Cart'

function Navbar() {
  const [navColor, setNavColor] = useState('bg-white')

  const changeNavbarColor = () => {
    window.scrollY > 10
      ? setNavColor('bg-white shadow-sm shadow-gray-100')
      : setNavColor('bg-white')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  return (
    <>
      <div className={`layout sticky top-0 z-50 py-4 md:py-8 ${navColor}`}>
        <div className='hidden md:block'>
          <div className='flex flex-wrap items-center justify-between gap-8'>
            <div className='flex items-center gap-8'>
              <NavLink to='/'>
                <Logo classLogo={`w-36 m-0 md:-mt-1 h-auto`} />
              </NavLink>

              <div>
                <ul>
                  <LinkNavbar />
                </ul>
              </div>
            </div>

            <div className='flex items-center gap-8'>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'active flex gap-2'
                    : 'inactive flex gap-2 hover:text-blue-500'
                }
                to='/cart'
              >
                <CartIcon className={'mt-0.5 h-5 w-5 text-black'} /> Cart
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'active rounded-md border border-blue-600 px-4 py-2 shadow-xl shadow-blue-100/50'
                    : 'inactive rounded-md border border-blue-600 px-4 py-2 shadow-xl shadow-blue-100/50 hover:text-black'
                }
                to='/login'
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>

        {/* Nav Mobile */}
        <div className='flex items-center justify-between md:hidden'>
          <NavLink to='/'>
            <Logo classLogo={`w-28 h-auto`} />
          </NavLink>

          <ButtonNavbar />
        </div>
      </div>
    </>
  )
}

export default Navbar

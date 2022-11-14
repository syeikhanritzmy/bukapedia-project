import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'
import LinkNavbarAdmin from '../../atoms/link-navbar/LinkNavbarAdmin'
import CartIcon from '../../atoms/icon/Cart'

function NavbarMobile() {
  const navigate = useNavigate()

  const authUser = useSelector((state) => state.authUser)
  const authAdmin = useSelector((state) => state.authAdmin)

  function handleLogout() {
    if (window.confirm('Are you sure to logout?')) {
      localStorage.removeItem('auth_admin') ||
        localStorage.removeItem('auth_user')
      window.location.reload()
      navigate('/')
    } else {
      return
    }
  }

  return (
    <>
      <div className='absolute top-16 z-50 h-auto w-11/12 rounded-md bg-white pb-4 shadow-sm shadow-gray-100'>
        <div className='m-4'>
          <div>
            <ul className='flex flex-col gap-4 py-3 md:flex-row md:items-center'>
              {authAdmin.auth.token ? <LinkNavbarAdmin /> : <LinkNavbar />}
            </ul>
          </div>

          <div className='flex items-center gap-8'>
            {authAdmin.auth.token ? (
              <>
                <button
                  className='rounded-md border border-blue-600 px-4 py-2 shadow-xl shadow-blue-100/50 hover:text-black'
                  onClick={
                    authAdmin.auth.token
                      ? handleLogout
                      : () => navigate('/login')
                  }
                >
                  {authAdmin.auth.token ? 'Log Out' : 'Log In'}
                </button>
              </>
            ) : (
              <>
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

                <button
                  className='rounded-md border border-blue-600 px-4 py-2 shadow-xl shadow-blue-100/50 hover:text-black'
                  onClick={
                    authUser.auth.token || authAdmin.auth.token
                      ? handleLogout
                      : () => navigate('/login')
                  }
                >
                  {authUser.auth.token || authAdmin.auth.token
                    ? 'Log Out'
                    : 'Log In'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile

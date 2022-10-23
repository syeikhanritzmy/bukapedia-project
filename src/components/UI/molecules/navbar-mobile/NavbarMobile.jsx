import React from 'react'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'

function NavbarMobile() {
  return (
    <>
      <div className='absolute top-16 z-50 h-auto w-11/12 rounded-md bg-white pb-4 shadow-sm shadow-gray-100'>
        <div className='m-4'>
          <div>
            <ul className='flex flex-col gap-4 py-3 md:flex-row md:items-center'>
              <LinkNavbar />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile

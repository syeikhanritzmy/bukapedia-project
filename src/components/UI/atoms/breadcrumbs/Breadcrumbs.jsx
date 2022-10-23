import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Breadcrumbs() {
  const product = useSelector((state) => state.productDetail.product)

  const handleTitleProduct = () => {
    if (product.title) {
      return product.title.substr(0, 20)
    } else {
      return product.title
    }
  }

  return (
    <>
      <nav aria-label='Breadcrumb'>
        <ol className='flex flex-wrap items-center gap-2'>
          <li>
            <Link
              className='text-sm font-normal text-gray-900 md:text-base'
              to='/'
            >
              Home
            </Link>
          </li>

          <span>/</span>

          <span className='hidden text-sm font-normal text-gray-900 md:block md:text-base'>
            {product.category}
          </span>

          <span className='hidden md:block'>/</span>

          <li>
            <span className='text-sm font-semibold text-gray-900 md:text-base'>
              {handleTitleProduct()}
            </span>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs

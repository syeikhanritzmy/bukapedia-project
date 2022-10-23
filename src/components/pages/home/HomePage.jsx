import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProducts } from '../../../features/home/homeSlice'
import Banner from '../../UI/organisms/banner/Banner'
import Skeleton from '../../UI/atoms/skeleton/Skeleton'
import ItemProduct from './ItemProduct'

function HomePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allProducts = useSelector((state) => state.home.product)
  const loading = useSelector((state) => state.home.loading)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const loopSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <Skeleton key={item} />)
  }

  return (
    <>
      <div className='md:layout my-8 overflow-hidden md:my-6'>
        {loading ? (
          <Skeleton />
        ) : (
          <Banner buyNow={() => navigate('/product/3')} />
        )}
      </div>

      <div className='layout my-8 md:my-12'>
        <div>
          <h2 className='text-base font-bold text-gray-900 md:text-lg lg:text-xl'>
            Products For You!
          </h2>
        </div>

        <div className='mt-6 grid grid-cols-2 gap-4 bg-white ms:gap-8 sm:grid-cols-3 sm:gap-12 lg:grid-cols-4 lg:gap-16'>
          {loading
            ? loopSkeleton()
            : allProducts?.map((product, index) => (
                <ItemProduct key={index} product={product} />
              ))}
        </div>
      </div>
    </>
  )
}

export default HomePage

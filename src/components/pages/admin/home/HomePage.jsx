import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchStockProducts,
  setStock,
  setStockProduct,
} from '../../../../features/stock-product/stockProductSlice'
import SekeletonTable from '../../../UI/atoms/skeleton/SkeletonTable'

function HomePage() {
  const dispatch = useDispatch()

  const { product, stock, loading } = useSelector((state) => state.stockProduct)

  useEffect(() => {
    dispatch(fetchStockProducts())
  }, [dispatch])

  const changeStock = (e) => {
    dispatch(setStock(e.target.value))
  }

  const handleButtonUpdate = (id) => {
    dispatch(setStockProduct({ id, stock }))
  }

  const loopSkeleton = () => {
    return [1, 2, 3, 4, 5, 6].map((item) => <SekeletonTable key={item} />)
  }

  return (
    <>
      <div className='layout relative my-8 mx-auto max-w-screen-xl md:my-12'>
        <div>
          <h2 className='text-lg font-bold text-gray-900 lg:text-xl'>
            Stock Products
          </h2>
        </div>

        <div className='relative overflow-x-auto'>
          <table className='mt-8 w-full text-left text-sm text-gray-500'>
            <thead className='bg-gray-50 text-gray-700'>
              <tr>
                <th
                  scope='col'
                  className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                >
                  No
                </th>
                <th
                  scope='col'
                  className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                >
                  Image
                </th>
                <th
                  scope='col'
                  className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                >
                  Product Name
                </th>
                <th
                  scope='col'
                  className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                >
                  Stock
                </th>
                <th
                  scope='col'
                  className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? loopSkeleton()
                : product?.map((product, index) => (
                    <tr
                      key={index}
                      className='border-b border-gray-200 text-base font-medium text-gray-900 hover:bg-slate-100/40'
                    >
                      <td className='py-3 px-6'>{index + 1}</td>

                      <td className='py-3 px-6'>
                        <img
                          src={product?.image}
                          alt={product?.title}
                          className='h-20 w-20 object-scale-down'
                        />
                      </td>

                      <td className='py-3 px-6 text-base font-medium text-gray-900 md:text-lg'>
                        <h3 className='h-auto w-72'>{product?.title}</h3>
                      </td>

                      <td className='py-3 px-6'>
                        <input
                          className='mx-auto w-12 bg-transparent text-sm font-semibold text-gray-900 md:text-base'
                          type='number'
                          min={1}
                          defaultValue={
                            JSON.parse(localStorage.getItem('stock'))?.find(
                              (item) => item.id === product?.id
                            )?.stock || 20
                          }
                          onChange={changeStock}
                        />
                      </td>

                      <td className='py-3 px-6'>
                        <button
                          type='submit'
                          className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
                          onClick={() => handleButtonUpdate(product?.id)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default HomePage

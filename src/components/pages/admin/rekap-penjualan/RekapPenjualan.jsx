import React from 'react'

function RekapPenjualan() {
  return (
    <>
      <div className='layout relative my-8 mx-auto max-w-screen-xl md:my-12'>
        <div>
          <h2 className='text-lg font-bold text-gray-900 lg:text-xl'>
            Rekap Penjualan
          </h2>
        </div>

        {localStorage.getItem('checkout') ? (
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
                    Price
                  </th>
                  <th
                    scope='col'
                    className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                  >
                    Sold
                  </th>
                  <th
                    scope='col'
                    className='py-3 px-6 text-base font-bold text-gray-900 lg:text-lg'
                  >
                    Income
                  </th>
                </tr>
              </thead>
              <tbody>
                {JSON.parse(localStorage.getItem('checkout')).map(
                  (item, index) => (
                    <tr
                      key={index}
                      className='border-b border-gray-200 text-base font-medium text-gray-900 hover:bg-slate-100/40'
                    >
                      <td className='py-3 px-6'>{index + 1}</td>

                      <td className='py-3 px-6'>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='h-20 w-20 object-scale-down'
                        />
                      </td>

                      <td className='py-3 px-6'>{item.title}</td>

                      <td className='py-3 px-6'>{item.price}</td>

                      <td className='py-3 px-6'>{item.cartQuantity}</td>

                      <td className='py-3 px-6'>
                        {item.price * item.cartQuantity}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>

            <div className='mt-4 flex justify-end bg-gray-50 p-4'>
              <h3 className='text-base font-semibold uppercase text-gray-900'>
                Total Income
              </h3>

              <h3 className='ml-4 text-base font-semibold uppercase text-gray-900'>
                {' '}
                <span className='mr-0.5 text-sm'>$</span>
                {JSON.parse(localStorage.getItem('checkout'))
                  .reduce(
                    (total, item) => total + item.price * item.cartQuantity,
                    0
                  )
                  .toString()
                  .substring(0, 5)}
              </h3>
            </div>
          </div>
        ) : (
          <div className='mt-8 text-center'>
            <h3 className='text-base font-semibold uppercase text-gray-900'>
              Data Empty
            </h3>
          </div>
        )}
      </div>
    </>
  )
}

export default RekapPenjualan

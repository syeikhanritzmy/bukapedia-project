import React from 'react'
import { useDispatch } from 'react-redux'
import {
  decrementQuantity,
  includeItem,
  incrementQuantity,
  removeFromCart,
} from '../../../../features/cart/cartSlice'

function CartItem({ id, title, price, category, image, cartQuantity, Sum }) {
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }))
  }

  const handleRemove = () => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <div>
      <div className='flex  w-full items-center justify-between '>
        <div className='flex w-1/12 items-center justify-around '>
          <input
            className='h-5 w-5 '
            type='checkbox'
            title='include in total'
            checked={Sum}
            onChange={() => {
              dispatch(includeItem({ id }))
            }}
          />
          <img src={image} alt='item' title={title} className='h-16 w-12 ' />
        </div>
        <div className='w-2/6 '>
          <div>
            <p>{title}</p>
            <p className='text-sm text-gray-400'>{category}</p>
          </div>
        </div>
        <div className='flex flex-col items-center  justify-center '>
          <p>Quantity</p>
          <div className='flex w-full items-center justify-between'>
            <button
              className='h-5 w-5 rounded-md bg-gray-300'
              onClick={
                cartQuantity <= 1
                  ? () => handleRemove()
                  : () => handleDecrement()
              }
            >
              -
            </button>
            <span className='my-2'>{cartQuantity}</span>
            <button
              className='h-5 w-5 rounded-md bg-gray-300'
              onClick={() => {
                dispatch(incrementQuantity({ id }))
              }}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button className='h-10 w-20 bg-red-200 ' onClick={handleRemove}>
            Delete
          </button>
        </div>
        <div className='mr-2 flex w-1/12 items-center justify-end'>
          <p className='text-sm'>{cartQuantity}</p>
          <p>x</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem

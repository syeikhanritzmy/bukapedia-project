import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../features/cart/cartSlice'
import toast, { Toaster } from 'react-hot-toast'

function ButtonAddToCart({ buttonName, product, counter }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authUser = useSelector((state) => state.authUser)
  const authAdmin = useSelector((state) => state.authAdmin)

  const handleAddToCart = () => {
    if (authUser.auth.token || authAdmin.auth.token) {
      dispatch(addToCart({ ...product, cartQuantity: counter }))
      toast.success('success add to cart')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <button
        className='h-10 w-28 rounded-full border border-black bg-transparent text-sm font-medium text-gray-900 hover:border-slate-100 hover:bg-slate-100'
        onClick={handleAddToCart}
      >
        {buttonName}
      </button>
      <Toaster />
    </>
  )
}

export default ButtonAddToCart

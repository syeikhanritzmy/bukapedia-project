import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../features/cart/cartSlice';

function ButtonAddToCart({ buttonName, product, counter }) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="h-10 w-28 rounded-full border border-black bg-transparent text-sm font-medium text-gray-900 hover:border-slate-100 hover:bg-slate-100"
        onClick={() => {
          dispatch(addToCart({ ...product, cartQuantity: counter }));
        }}
      >
        {buttonName}
      </button>
    </>
  );
}

export default ButtonAddToCart;

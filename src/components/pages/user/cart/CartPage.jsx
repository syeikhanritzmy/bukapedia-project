import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { batchRemove } from '../../../../features/cart/cartSlice';
import CartItem from './CartItem';

function CartPage() {
  const dispatch = useDispatch();

  const allCart = useSelector((state) => state.cart.items);

  const total =
    allCart.length <= 0
      ? 0
      : allCart
          ?.map((item) =>
            item.isCheckout ? item.price * item.cartQuantity : 0
          )
          .reduce((itemPrice, accPrice) => accPrice + itemPrice)
          .toString()
          .substring(0, 5);

  const checkoutHandler = () => {
    const item = allCart.filter((item) => item.isCheckout);
    const itemPush = [...item];
    console.log(itemPush);

    const filtered = allCart
      .filter((item) => item.isCheckout)
      .map((item) => item.id);
      
    const convertItem = JSON.stringify(itemPush);
    window.localStorage.setItem('checkout', convertItem);

    dispatch(batchRemove({ ids: filtered }));
  };

  return (
    <div className="layout max-w-screenxl my-8 mx-auto md:my-12">
      <h2 className="text-base font-bold text-gray-900 md:text-lg lg:text-xl">
        SHOPPING CART
      </h2>

      <p>{`have ${allCart != undefined ? 0 : allCart.length} items in cart`}</p>

      <div className="mt-6 grid h-64 grid-cols-1 gap-4 overflow-y-auto">
        {allCart?.map((data, index) => (
          <CartItem
            id={data.id}
            title={data.title}
            category={data.category}
            image={data.image}
            key={index}
            cartQuantity={data.cartQuantity}
            price={data.price}
            isCheckout={data.isCheckout}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="">
          <span>Total Item </span>
          <span>{`$ ${total}`}</span>
        </div>
        <div>
          <button
            disabled={total <= 0}
            onClick={() => {
              checkoutHandler();
            }}
            className="h-10 w-24 rounded-sm bg-blue-500/50 font-bold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

import React, { useState } from 'react';
import Breadcrumbs from '../../atoms/breadcrumbs/Breadcrumbs';
import ButtonCount from '../../atoms/button/ButtonCount';
import ButtonAddToCart from '../../atoms/button/ButtonAddToCart';

function CardProductDetail({
  srcImg,
  altImg,
  title,
  description,
  price,
  productItem,
}) {
  const [count, setCount] = useState(1);
  console.log(count);
  console.log(productItem);
  function handleSubstract() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  }
  function handelAdd() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="layout mt-6 bg-white md:my-8">
        <div>
          <Breadcrumbs />
        </div>

        <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-2 md:gap-16">
          <div className="flex items-center justify-center rounded-md bg-slate-100 py-10">
            <img className="h-auto w-6/12" src={srcImg} alt={altImg} />
          </div>

          <div>
            <h3 className="border-b border-gray-200 text-lg font-bold text-gray-900 lg:text-xl ">
              {title}
            </h3>
            <div className="mt-4">
              <p className="text-sm font-normal text-gray-900 md:text-base">
                {description}
              </p>
            </div>

            <div className="my-4 md:mt-4">
              <span className="text-base font-bold text-gray-900 md:text-lg">
                Price <span className="text-sm">$</span>
                {price}
              </span>
            </div>

            <div className="sticky bottom-0 flex justify-center bg-white py-2 md:relative md:mt-8 md:justify-start md:py-0">
              <div className="flex items-center gap-12">
                <div className="m-0 flex gap-12 md:mt-4">
                  <div className="flex items-center gap-4">
                    <ButtonCount
                      count={count}
                      handelAdd={handelAdd}
                      handleSubstract={handleSubstract}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <ButtonAddToCart
                    buttonName={'Add to Cart'}
                    product={productItem}
                    counter={count}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProductDetail;

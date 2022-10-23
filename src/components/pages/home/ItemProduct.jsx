import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../UI/organisms/card/Card'

function ItemProduct({ product }) {
  const navigate = useNavigate()

  const navigateToDetailProduct = () => {
    navigate(`/product/${product?.id}`, { replace: true })
  }
  return (
    <>
      <Card
        srcImg={product?.image}
        altImg={product?.title}
        title={(product?.title).substr(0, 30) + '...'}
        clickProductDetail={navigateToDetailProduct}
        price={product?.price}
      />
    </>
  )
}

export default ItemProduct

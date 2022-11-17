import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../../../../features/product-detail/productDetailSlice'
import CardProductDetail from '../../../UI/organisms/card/CardProductDetail'
import SkeletonProductDetail from '../../../UI/atoms/skeleton/SkeletonProductDetail'

function ProductDetailPage() {
  const dispatch = useDispatch()
  const { productId } = useParams()

  const product = useSelector((state) => state.productDetail.product)
  const loading = useSelector((state) => state.productDetail.loading)

  useEffect(() => {
    dispatch(fetchProductDetail(productId))
  }, [dispatch])

  return (
    <>
      <div className='mx-auto max-w-screen-xl'>
        {loading ? (
          <SkeletonProductDetail />
        ) : (
          <CardProductDetail
            srcImg={product?.image}
            altImg={product?.title}
            title={product?.title}
            description={product?.description}
            price={product?.price}
            productItem={product}
          />
        )}
      </div>
    </>
  )
}

export default ProductDetailPage

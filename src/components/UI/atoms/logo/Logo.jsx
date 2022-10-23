import React from 'react'
import ImgBukaPedia from '../../../../assets/logo/bukapedia.svg'

function Logo({ classLogo }) {
  return (
    <>
      <img className={`${classLogo}`} src={ImgBukaPedia} alt='bukapedia' />
    </>
  )
}

export default Logo

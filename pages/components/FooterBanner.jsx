import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'


const FooterBanner = ({footerBanner: {
   largeText1, largeText2, saleTime, smallText,midText,product, buttonText, image, discount,desc
}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{largeText1}</p>
          <h3>{largeText2}</h3>
          <h3>{smallText}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{midText}</p>
          <h3>{product}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner
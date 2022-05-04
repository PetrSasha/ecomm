import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">
           {heroBanner.largeText1}
        </p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText2}</h1>
        <img src={urlFor(heroBanner.image)} className='hero-banner-image' alt='macAir'/>
        <div>
          <Link href={`/product/${heroBanner.product}`} >
              <button className='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>{heroBanner.smallText}</h5>
            <p>{heroBanner.saleTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
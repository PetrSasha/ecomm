import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineLeft } from 'react-icons/ai'



const Cart = () => {
  const {totalQuantities} = useStateContext()
  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <butoon type="button" className='cart-heading' onClick=''>
          <AiOutlineLeft/>
          <span>Your Cart </span>
          <span>({totalQuantities} items)</span>
        </butoon>

      </div>
    </div>
  )
}

export default Cart
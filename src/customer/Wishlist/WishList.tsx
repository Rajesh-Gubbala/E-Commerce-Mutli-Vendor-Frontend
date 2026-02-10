import React, { useEffect } from 'react'
import WishListProductCard from './WishListProductCard'
import { useAppDispatch, useAppSelector } from '../../State/Store'
import { getWishlistByUserId } from '../../State/Customer/WishList'

const WishList = () => {
  const dispatch=useAppDispatch()
  const {wishlist}=useAppSelector(store=>store)

  useEffect(()=>{
dispatch(getWishlistByUserId())
  },[])
  return (
    <div className="h-[85vh] p-5 lg:p-20">
    <section>
      <h1><strong>My Wishlist</strong> 5 items</h1>
      <div className="pt-10 flex flex-wrap gap-5">
        {wishlist.wishlist?.products.map((item) => (
          <WishListProductCard item={item}/>
        ))}
      </div>
    </section>
  </div>
  
  )
}

export default WishList
import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'
import { useAppSelector } from '../../../../State/Store';

const ShopByCategory = () => {
  const { customer } = useAppSelector(store => store);
  const uniqueCategories = Array.from(new Map(customer.homePageData?.shopByCategories.map(item => [item.name, item])).values());
  return (
    <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
        {/* {customer.homePageData?.shopByCategories.map((item)=><ShopByCategoryCard item={item}/>)} */}
        {uniqueCategories.map((item) => <ShopByCategoryCard key={item.id} item={item} />)}
       
    </div>
  )
}

export default ShopByCategory
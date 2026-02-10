// import React from 'react'
// import { Deal } from '../../../../Typess/DealType'

// const DealCard = ({item}:{item:Deal}) => {
//   return (
//     <div className='w-[11rem] cursor-pointer '>
//         <img  className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem]
//        object-cover object-top '
//         src={item.category.image} alt=''/>
//         <div className='border-4 border-black bg-black text-white p-2 text-center'>
        
//          {/* <div className="w-[11rem] cursor-pointer overflow-hidden flex flex-col items-center"> */}
//             <p className='text-lg font-semibold'>{item.category.name}</p>
//             <p className='text-2xl font-bold'>{item.discount}% OFF</p>
//             <p className='text-balance text-lg'>shop now</p>
//         </div>
//     </div>
//   )
// }

// export default DealCard

import React from 'react';
import { Deal } from '../../../../Typess/DealType';

const DealCard = ({ item }: { item: Deal }) => {
  return (
    <div className="group relative w-[13rem] cursor-pointer overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
      
      {/* Image Container */}
      <div className="relative h-[16rem] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          src={item.category.image}
          alt={item.category.name}
        />
        
        {/* Premium Discount Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 shadow-md border-l-2 border-black">
          <p className="text-xs font-black tracking-tighter text-black">
            {item.discount}% <span className="font-light">OFF</span>
          </p>
        </div>

        {/* Hover Overlay Shade */}
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center py-5 px-2 bg-white transition-colors duration-300">
        
        {/* Category Name - High-End Serif style */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">Limited Offer</p>
        <h3 className="text-lg font-serif italic text-slate-900 group-hover:text-green-800 transition-colors">
          {item.category.name}
        </h3>

        {/* Interactive "Shop Now" Button (Appears on Hover) */}
        <div className="mt-3 overflow-hidden h-6">
           <p className="text-sm font-bold uppercase tracking-widest text-black translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
             Shop Now →
           </p>
           {/* Static Underline */}
           <div className="h-[1px] w-8 bg-gray-300 mx-auto transition-all duration-500 group-hover:w-full group-hover:bg-black" />
        </div>
      </div>

      {/* Luxury Inner Border Detail (only visible on hover) */}
      <div className="absolute inset-0 border-[1px] border-black/5 pointer-events-none" />
    </div>
  );
};

export default DealCard;
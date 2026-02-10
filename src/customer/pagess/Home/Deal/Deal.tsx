// import React from 'react'
// import DealCard from './DealCard'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useAppSelector } from '../../../../State/Store';

// const Deal = () => {
//   const { customer } = useAppSelector(store => store);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       };
//       const uniqueDeals = Array.from(new Map(customer.homePageData?.deals.map(item => [item.category.name, item])).values());
//   return (
//     <div className='py-5 lg:px-20'>
//     <div className='flex items-center justify-between'>
//     {/* <Slider {...settings}> */}
//     {uniqueDeals.slice(0,7).map((item) => <DealCard key={item.category.id} item={item} />)}
//     </div>
//     </div>
//   )
// }

// export default Deal

import React from 'react'
import DealCard from './DealCard'
import { useAppSelector } from '../../../../State/Store';

const Deal = () => {
  const { customer } = useAppSelector(store => store);

  // Logic to filter unique deals by category name to avoid duplicates
  const uniqueDeals = Array.from(
    new Map(
      customer.homePageData?.deals.map(item => [item.category.name, item])
    ).values()
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto lg:px-20 px-6">
        
        {/* Section Header: Luxury Branding Style */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-3">
            Seasonal Curation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 italic">
            Exclusive Deals
          </h2>
          <div className="w-20 h-[1px] bg-slate-300"></div>
        </div>

        {/* The Premium Grid Arrangement */}
        {/* We use a flexible grid that centers items and adjusts columns based on screen size */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-12 lg:gap-x-8 justify-items-center">
          {uniqueDeals.length > 0 ? (
            uniqueDeals.slice(0, 10).map((item) => (
              <div 
                key={item.category.id} 
                className="w-full flex justify-center transform transition-all duration-500 hover:-translate-y-3"
              >
                <DealCard item={item} />
              </div>
            ))
          ) : (
            /* Fallback loader state if no deals are present */
            <div className="col-span-full py-10 text-slate-400 italic">
              Loading our finest offers...
            </div>
          )}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 flex justify-center">
          <button className="group relative px-8 py-3 overflow-hidden border border-black text-black transition-all duration-500 hover:text-white">
            <span className="relative z-10 text-xs uppercase tracking-widest font-bold">
              View All Curated Deals
            </span>
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Deal;
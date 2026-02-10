// import React from "react";
import "./ShopByCategory.css";
// import { HomeCategory } from "../../../../Typess/HomeCategoryType";

// const ShopByCategoryCard = ({ item }: { item: HomeCategory }) => {
//   return (
//     <div
//       className="flex gap-3 flex-col 
//     justify-center items-center group cursor-pointer"
//     >
//       <div className=" custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-green-600">
//         <img
//           className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
//           src={item.image}
//           alt=""
//         />
//       </div>
//       <h1>{item.name}</h1>
//     </div>
//   );
// };

// export default ShopByCategoryCard;

import React from "react";
import { HomeCategory } from "../../../../Typess/HomeCategoryType";

const ShopByCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div className="group relative flex flex-col items-center w-full max-w-[280px] cursor-pointer overflow-hidden rounded-xl bg-white transition-all duration-500 hover:shadow-2xl">
      
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <img
          className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
          src={item.image}
          alt={item.name}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 translate-y-4 rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-center backdrop-blur-md transition-all duration-500 group-hover:translate-y-0">
          <span className="font-cursive text-xl tracking-wide text-white drop-shadow-md">
            {item.name}
          </span>
        </div>
      </div>

      <div className="py-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Explore {item.name}
        </h3>
      </div>

      <div className="absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:border-green-600/20" />
    </div>
  );
};

export default ShopByCategoryCard;
import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=
        80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f
        GVufDB8fHx8fA%3D%3D" alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
        
        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2898&auto=format&fi
        t=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="col-span-4 row-span-6 text-white">
        <img 
        className="w-full h-full object-cover object-top rounded-md"
        src="https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?q=80&w=3271&auto=format
        &fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt=""/>
      </div>

      <div className="col-span-3 row-span-12 text-white">
        <img 
        className="w-full h-full object-cover object-top rounded-md"
        src="https://images.unsplash.com/photo-1610047402714-307d99a677db?q=80&w=2486&auto=forma
        t&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://plus.unsplash.com/premium_photo-1724762183134-c17cf5f5bed2?q=80&w=3270&auto=format&fit
          =crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" />
      </div>

      <div className="col-span-2 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;

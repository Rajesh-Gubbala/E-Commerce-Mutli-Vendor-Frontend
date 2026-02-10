import React from "react";
import ElectricCategoryCard from "./ElectricCategoryCard";
import { useAppSelector } from "../../../../State/Store";

const ElectricCategory = () => {
  const { customer } = useAppSelector((store) => store);

  if (!customer?.homePageData?.electricCategories?.length) {
    return <p>No categories available</p>;
  }

  // Remove duplicates based on the `id` field
  const uniqueCategories = customer.homePageData.electricCategories.filter(
    (category, index, self) =>
      index === self.findIndex((c) => c.name === category.name)
  );

  console.log("'''''''''''''",customer)

  console.log("Unique Categories:", uniqueCategories);

  return (
    <div className="flex flex-wrap justify-between py-5 cursor-pointer lg:px-20 border-b">
      {uniqueCategories.slice(0, 7).map((item, index) => (
        <ElectricCategoryCard key={item.id} item={item} />
      ))}
    </div>
  );
};


export default ElectricCategory;

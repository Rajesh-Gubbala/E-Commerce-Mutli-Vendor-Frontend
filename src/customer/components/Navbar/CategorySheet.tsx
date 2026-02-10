import React from "react";
import { menLevelTwo } from "../../../Data/category/level Two/menLevelTwo";
import { womenLevelTwo } from "../../../Data/category/level Two/womenLevelTwo";
import { electronicsLevelTwo } from "../../../Data/category/level Two/electronicsLevelTwo";
import { furnitureLevelTwo } from "../../../Data/category/level Two/furnitureLevelTwo";
import { menLevelThree } from "../../../Data/category/level Three/menLevelThree";
import { womenLevelThree } from "../../../Data/category/level Three/womenLevelThree";
import { electronicsLevelThree } from "../../../Data/category/level Three/electronicsLevelThree";
import { furnitureLevelThree } from "../../../Data/category/level Three/furnitureLevelThree";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categoryTwo: Record<string, any[]> = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree: Record<string, any[]> = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({selectedCategory,setShowSheet}:any) => {
  const childCategory = (category: any[], parentCategoryId: string) => {
    return category.filter((child) => child.parentCategoryId === parentCategoryId);
  };

  const navigate=useNavigate();

  return (
    <Box sx={{ zIndex: 2 }} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item:any, index) => (
          <div
            key={item.categoryId}
            className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
          >
            <p className="text-green-600 mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(categoryThree[selectedCategory], item.categoryId).map((subItem) => (
                <li key={subItem.categoryId}
                onClick={()=>navigate("/products/"+item.categoryId)}
                className="hover:text-green-600 cursor-pointer">
                  {subItem.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
